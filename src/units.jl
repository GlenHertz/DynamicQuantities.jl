module Units

export uparse, @u_str

import ..DEFAULT_DIM_TYPE
import ..DEFAULT_VALUE_TYPE
import ..Quantity
import ..LazyFloat64

const DEFAULT_UNIT_TYPE = LazyFloat64

macro add_prefixes(base_unit, prefixes)
    @assert prefixes.head == :tuple
    expr = _add_prefixes(base_unit, prefixes.args)
    return expr |> esc
end

function _add_prefixes(base_unit::Symbol, prefixes)
    all_prefixes = (
        f=1e-15, p=1e-12, n=1e-9, μ=1e-6, u=1e-6, m=1e-3, c=1e-2, d=1e-1,
        k=1e3, M=1e6, G=1e9
    )
    expr = Expr(:block)
    for (prefix, value) in zip(keys(all_prefixes), values(all_prefixes))
        prefix in prefixes || continue
        new_unit = Symbol(prefix, base_unit)
        push!(expr.args, :(const $new_unit = DEFAULT_UNIT_TYPE($value) * $base_unit))
    end
    return expr
end

# SI base units
"Length in meters. Available variants: `fm`, `pm`, `nm`, `μm` (/`um`), `cm`, `dm`, `mm`, `km`, `Mm`, `Gm`."
const m = Quantity(DEFAULT_UNIT_TYPE(1.0), length=1)
"Mass in grams. Available variants: `μg` (/`ug`), `mg`, `kg`."
const g = Quantity(DEFAULT_UNIT_TYPE(1e-3), mass=1)
"Time in seconds. Available variants: `fs`, `ps`, `ns`, `μs` (/`us`), `ms`, `min`, `h` (/`hr`), `day`, `yr`, `kyr`, `Myr`, `Gyr`."
const s = Quantity(DEFAULT_UNIT_TYPE(1.0), time=1)
"Current in Amperes. Available variants: `nA`, `μA` (/`uA`), `mA`, `kA`."
const A = Quantity(DEFAULT_UNIT_TYPE(1.0), current=1)
"Temperature in Kelvin. Available variant: `mK`."
const K = Quantity(DEFAULT_UNIT_TYPE(1.0), temperature=1)
"Luminosity in candela. Available variant: `mcd`."
const cd = Quantity(DEFAULT_UNIT_TYPE(1.0), luminosity=1)
"Amount in moles. Available variant: `mmol`."
const mol = Quantity(DEFAULT_UNIT_TYPE(1.0), amount=1)

@add_prefixes m (f, p, n, μ, u, c, d, m, k, M, G)
@add_prefixes g (μ, u, m, k)
@add_prefixes s (f, p, n, μ, u, m)
@add_prefixes A (n, μ, u, m, k)
@add_prefixes K (m,)
@add_prefixes cd (m,)
@add_prefixes mol (m,)

# SI derived units
"Frequency in Hertz. Available variants: `kHz`, `MHz`, `GHz`."
const Hz = inv(s)
"Force in Newtons."
const N = kg * m / (s * s)
"Pressure in Pascals. Available variant: `kPa`."
const Pa = N / (m * m)
"Energy in Joules. Available variant: `kJ`."
const J = N * m
"Power in Watts. Available variants: `kW`, `MW`, `GW`."
const W = J / s
"Charge in Coulombs."
const C = A * s
"Voltage in Volts. Available variants: `kV`, `MV`, `GV`."
const V = W / A
"Capacitance in Farads."
const F = C / V
"Resistance in Ohms. Available variant: `mΩ`. Also available is ASCII `ohm` (with variant `mohm`)."
const Ω = V / A
const ohm = Ω
"Magnetic flux density in Teslas."
const T = N / (A * m)

@add_prefixes Hz (k, M, G)
@add_prefixes N ()
@add_prefixes Pa (k,)
@add_prefixes J (k,)
@add_prefixes W (k, M, G)
@add_prefixes C ()
@add_prefixes V (m, k, M, G)
@add_prefixes F ()
@add_prefixes Ω (m,)
@add_prefixes ohm (m,)
@add_prefixes T ()

# Common assorted units
## Time
const min = DEFAULT_UNIT_TYPE(60) * s
const h = DEFAULT_UNIT_TYPE(60) * min
const hr = h
const day = DEFAULT_UNIT_TYPE(24) * h
const yr = DEFAULT_UNIT_TYPE(365.25) * day

@add_prefixes min ()
@add_prefixes h ()
@add_prefixes hr ()
@add_prefixes day ()
@add_prefixes yr (k, M, G)

## Volume
"Volume in liters. Available variants: `mL`, `dL`."
const L = dm * dm * dm

@add_prefixes L (m, d)

## Pressure
"Pressure in bars."
const bar = DEFAULT_UNIT_TYPE(100) * kPa

@add_prefixes bar ()

# Do not wish to define Gaussian units, as it changes
# some formulas. Safer to force user to work exclusively in one unit system.

# Do not wish to define physical constants, as the number of symbols might lead to ambiguity.
# The user should define these instead.

"""
    uparse(s::AbstractString)

Parse a string containing an expression of units and return the
corresponding `Quantity` object with `Float64` value. For example,
`uparse("m/s")` would be parsed to `Quantity(1.0, length=1, time=-1)`.
"""
function uparse(s::AbstractString)::Quantity{LazyFloat64,DEFAULT_DIM_TYPE}
    return as_quantity(eval(Meta.parse(s)))
end

as_quantity(q::Quantity) = q
as_quantity(x::Number) = Quantity(convert(LazyFloat64, x), DEFAULT_DIM_TYPE)
as_quantity(x) = error("Unexpected type evaluated: $(typeof(x))")

"""
    u"[unit expression]"

Parse a string containing an expression of units and return the
corresponding `Quantity` object with `Float64` value. For example,
`u"km/s^2"` would be parsed to `Quantity(1000.0, length=1, time=-2)`.
"""
macro u_str(s)
    return esc(uparse(s))
end

end

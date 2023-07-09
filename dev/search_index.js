var documenterSearchIndex = {"docs":
[{"location":"api/#Utilities","page":"Utilities","title":"Utilities","text":"","category":"section"},{"location":"api/","page":"Utilities","title":"Utilities","text":"The two main general utilities for working with quantities are ustrip and dimension:","category":"page"},{"location":"api/","page":"Utilities","title":"Utilities","text":"ustrip\ndimension","category":"page"},{"location":"api/#DynamicQuantities.ustrip","page":"Utilities","title":"DynamicQuantities.ustrip","text":"ustrip(q::AbstractQuantity)\n\nRemove the units from a quantity.\n\n\n\n\n\n","category":"function"},{"location":"api/#DynamicQuantities.dimension","page":"Utilities","title":"DynamicQuantities.dimension","text":"dimension(q::AbstractQuantity)\n\nGet the dimensions of a quantity, returning an AbstractDimensions object.\n\n\n\n\n\n","category":"function"},{"location":"api/#Accessing-dimensions","page":"Utilities","title":"Accessing dimensions","text":"","category":"section"},{"location":"api/","page":"Utilities","title":"Utilities","text":"Utility functions to extract specific dimensions are as follows:","category":"page"},{"location":"api/","page":"Utilities","title":"Utilities","text":"ulength\numass\nutime\nucurrent\nutemperature\nuluminosity\nuamount","category":"page"},{"location":"api/#DynamicQuantities.ulength","page":"Utilities","title":"DynamicQuantities.ulength","text":"ulength(q::AbstractQuantity)\nulength(d::AbstractDimensions)\n\nGet the length dimension of a quantity (e.g., meters^(ulength)).\n\n\n\n\n\n","category":"function"},{"location":"api/#DynamicQuantities.umass","page":"Utilities","title":"DynamicQuantities.umass","text":"umass(q::AbstractQuantity)\numass(d::AbstractDimensions)\n\nGet the mass dimension of a quantity (e.g., kg^(umass)).\n\n\n\n\n\n","category":"function"},{"location":"api/#DynamicQuantities.utime","page":"Utilities","title":"DynamicQuantities.utime","text":"utime(q::AbstractQuantity)\nutime(d::AbstractDimensions)\n\nGet the time dimension of a quantity (e.g., s^(utime))\n\n\n\n\n\n","category":"function"},{"location":"api/#DynamicQuantities.ucurrent","page":"Utilities","title":"DynamicQuantities.ucurrent","text":"ucurrent(q::AbstractQuantity)\nucurrent(d::AbstractDimensions)\n\nGet the current dimension of a quantity (e.g., A^(ucurrent)).\n\n\n\n\n\n","category":"function"},{"location":"api/#DynamicQuantities.utemperature","page":"Utilities","title":"DynamicQuantities.utemperature","text":"utemperature(q::AbstractQuantity)\nutemperature(d::AbstractDimensions)\n\nGet the temperature dimension of a quantity (e.g., K^(utemperature)).\n\n\n\n\n\n","category":"function"},{"location":"api/#DynamicQuantities.uluminosity","page":"Utilities","title":"DynamicQuantities.uluminosity","text":"uluminosity(q::AbstractQuantity)\nuluminosity(d::AbstractDimensions)\n\nGet the luminosity dimension of a quantity (e.g., cd^(uluminosity)).\n\n\n\n\n\n","category":"function"},{"location":"api/#DynamicQuantities.uamount","page":"Utilities","title":"DynamicQuantities.uamount","text":"uamount(q::AbstractQuantity)\nuamount(d::AbstractDimensions)\n\nGet the amount dimension of a quantity (e.g., mol^(uamount)).\n\n\n\n\n\n","category":"function"},{"location":"api/","page":"Utilities","title":"Utilities","text":"Modules = [DynamicQuantities]\nPages   = [\"utils.jl\"]\nFilter  = t -> !(t in [ustrip, dimension, ulength, umass, utime, ucurrent, utemperature, uluminosity, uamount])","category":"page"},{"location":"api/#Internals","page":"Utilities","title":"Internals","text":"","category":"section"},{"location":"api/#FixedRational","page":"Utilities","title":"FixedRational","text":"","category":"section"},{"location":"api/","page":"Utilities","title":"Utilities","text":"DynamicQuantities.FixedRational\nDynamicQuantities.denom","category":"page"},{"location":"api/#DynamicQuantities.FixedRational","page":"Utilities","title":"DynamicQuantities.FixedRational","text":"FixedRational{T,den}\n\nA rational number with a fixed denominator. Significantly faster than Rational{T}, as it never needs to compute the gcd apart from when printing. Access the denominator with denom(F) (which converts to T).\n\nFields\n\nnum: numerator of type T. The denominator is fixed to the type parameter den.\n\n\n\n\n\n","category":"type"},{"location":"api/#DynamicQuantities.denom","page":"Utilities","title":"DynamicQuantities.denom","text":"denom(F::FixedRational)\n\nSince den can be a different type than T, this function is used to get the denominator as a T.\n\n\n\n\n\n","category":"function"},{"location":"constants/#Units","page":"Constants","title":"Units","text":"","category":"section"},{"location":"constants/","page":"Constants","title":"Constants","text":"Many common physical constants are available as well:","category":"page"},{"location":"constants/","page":"Constants","title":"Constants","text":"Constants.c\nConstants.h\nConstants.hbar\nConstants.e\nConstants.k_B\nConstants.N_A\nConstants.eV\nConstants.R\nConstants.F\nConstants.sigma_sb\nConstants.alpha\nConstants.u\nConstants.G\nConstants.mu_0\nConstants.eps_0\nConstants.m_e\nConstants.m_p\nConstants.m_n\nConstants.a_0\nConstants.k_e\nConstants.Ryd","category":"page"},{"location":"constants/#DynamicQuantities.Constants.c","page":"Constants","title":"DynamicQuantities.Constants.c","text":"Speed of light in a vacuum. Standard.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.h","page":"Constants","title":"DynamicQuantities.Constants.h","text":"Planck constant. Standard.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.hbar","page":"Constants","title":"DynamicQuantities.Constants.hbar","text":"Reduced Planck constant (h/2π). Standard.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.e","page":"Constants","title":"DynamicQuantities.Constants.e","text":"Elementary charge. Standard.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.k_B","page":"Constants","title":"DynamicQuantities.Constants.k_B","text":"Boltzmann constant. Standard.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.N_A","page":"Constants","title":"DynamicQuantities.Constants.N_A","text":"Avogadro constant. Standard.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.eV","page":"Constants","title":"DynamicQuantities.Constants.eV","text":"Electron volt. Standard.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.R","page":"Constants","title":"DynamicQuantities.Constants.R","text":"Molar gas constant. Standard.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.F","page":"Constants","title":"DynamicQuantities.Constants.F","text":"Faraday constant. Standard.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.sigma_sb","page":"Constants","title":"DynamicQuantities.Constants.sigma_sb","text":"Stefan-Boltzmann constant. Standard.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.alpha","page":"Constants","title":"DynamicQuantities.Constants.alpha","text":"Fine-structure constant. Measured.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.u","page":"Constants","title":"DynamicQuantities.Constants.u","text":"Atomic mass unit (1/12th the mass of Carbon-12). Measured.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.G","page":"Constants","title":"DynamicQuantities.Constants.G","text":"Newtonian constant of gravitation. Measured.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.mu_0","page":"Constants","title":"DynamicQuantities.Constants.mu_0","text":"Vacuum magnetic permeability. Measured.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.eps_0","page":"Constants","title":"DynamicQuantities.Constants.eps_0","text":"Vacuum electric permittivity. Measured.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.m_e","page":"Constants","title":"DynamicQuantities.Constants.m_e","text":"Electron mass. Measured.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.m_p","page":"Constants","title":"DynamicQuantities.Constants.m_p","text":"Proton mass. Measured.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.m_n","page":"Constants","title":"DynamicQuantities.Constants.m_n","text":"Neutron mass. Measured.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.a_0","page":"Constants","title":"DynamicQuantities.Constants.a_0","text":"Bohr radius. Measured.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.k_e","page":"Constants","title":"DynamicQuantities.Constants.k_e","text":"Coulomb constant (Note: SI units only!). Measured.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.Ryd","page":"Constants","title":"DynamicQuantities.Constants.Ryd","text":"Rydberg frequency. Measured.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#Astronomical-constants","page":"Constants","title":"Astronomical constants","text":"","category":"section"},{"location":"constants/","page":"Constants","title":"Constants","text":"Constants.M_earth\nConstants.M_sun\nConstants.M_jup\nConstants.R_earth\nConstants.R_jup\nConstants.R_sun\nConstants.L_sun\nConstants.L_bol0\nConstants.sigma_T\nConstants.au\nConstants.pc\nConstants.ly\nConstants.atm","category":"page"},{"location":"constants/#DynamicQuantities.Constants.M_earth","page":"Constants","title":"DynamicQuantities.Constants.M_earth","text":"Earth mass. Measured.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.M_sun","page":"Constants","title":"DynamicQuantities.Constants.M_sun","text":"Solar mass. Measured.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.M_jup","page":"Constants","title":"DynamicQuantities.Constants.M_jup","text":"Jupiter mass. Measured.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.R_earth","page":"Constants","title":"DynamicQuantities.Constants.R_earth","text":"Nominal Earth equatorial radius. Standard.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.R_jup","page":"Constants","title":"DynamicQuantities.Constants.R_jup","text":"Nominal Jupiter equatorial radius. Standard.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.R_sun","page":"Constants","title":"DynamicQuantities.Constants.R_sun","text":"Nominal solar radius. Standard.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.L_sun","page":"Constants","title":"DynamicQuantities.Constants.L_sun","text":"Nominal solar luminosity. Standard.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.L_bol0","page":"Constants","title":"DynamicQuantities.Constants.L_bol0","text":"Standard luminosity at absolute bolometric magnitude 0. Standard.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.sigma_T","page":"Constants","title":"DynamicQuantities.Constants.sigma_T","text":"Thomson scattering cross-section. Measured.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.au","page":"Constants","title":"DynamicQuantities.Constants.au","text":"Astronomical unit. Standard.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.pc","page":"Constants","title":"DynamicQuantities.Constants.pc","text":"Parsec. Standard.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.ly","page":"Constants","title":"DynamicQuantities.Constants.ly","text":"Light year. Standard.\n\n\n\n\n\n","category":"constant"},{"location":"constants/#DynamicQuantities.Constants.atm","page":"Constants","title":"DynamicQuantities.Constants.atm","text":"Standard atmosphere. Standard.\n\n\n\n\n\n","category":"constant"},{"location":"units/#Units","page":"Units","title":"Units","text":"","category":"section"},{"location":"units/","page":"Units","title":"Units","text":"The two main functions for working with units are uparse and u_str:","category":"page"},{"location":"units/","page":"Units","title":"Units","text":"@u_str\nuparse","category":"page"},{"location":"units/#DynamicQuantities.UnitsParse.@u_str","page":"Units","title":"DynamicQuantities.UnitsParse.@u_str","text":"u\"[unit expression]\"\n\nParse a string containing an expression of units and return the corresponding Quantity object with Float64 value. For example, u\"km/s^2\" would be parsed to Quantity(1000.0, length=1, time=-2).\n\nNote that inside this expression, you also have access to the Constants module. So, for example, u\"Constants.c^2 * Hz^2\" would evaluate to the quantity corresponding to the speed of light multiplied by Hertz, squared.\n\n\n\n\n\n","category":"macro"},{"location":"units/#DynamicQuantities.UnitsParse.uparse","page":"Units","title":"DynamicQuantities.UnitsParse.uparse","text":"uparse(s::AbstractString)\n\nParse a string containing an expression of units and return the corresponding Quantity object with Float64 value. For example, uparse(\"m/s\") would be parsed to Quantity(1.0, length=1, time=-1).\n\nNote that inside this expression, you also have access to the Constants module. So, for example, uparse(\"Constants.c^2 * Hz^2\") would evaluate to the quantity corresponding to the speed of light multiplied by Hertz, squared.\n\n\n\n\n\n","category":"function"},{"location":"units/#Available-units","page":"Units","title":"Available units","text":"","category":"section"},{"location":"units/","page":"Units","title":"Units","text":"The base SI units are as follows. Instead of calling directly, it is recommended to access them via the @u_str macro, which evaluates the expression in a namespace with all the units available.","category":"page"},{"location":"units/","page":"Units","title":"Units","text":"Units.m\nUnits.kg\nUnits.s\nUnits.A\nUnits.K\nUnits.cd\nUnits.mol","category":"page"},{"location":"units/#DynamicQuantities.Units.m","page":"Units","title":"DynamicQuantities.Units.m","text":"Length in meters. Available variants: fm, pm, nm, μm (/um), cm, dm, mm, km, Mm, Gm.\n\n\n\n\n\n","category":"constant"},{"location":"units/#DynamicQuantities.Units.kg","page":"Units","title":"DynamicQuantities.Units.kg","text":"Mass in kilograms. Available variants: μg (/ug), mg, g.\n\n\n\n\n\n","category":"constant"},{"location":"units/#DynamicQuantities.Units.s","page":"Units","title":"DynamicQuantities.Units.s","text":"Time in seconds. Available variants: fs, ps, ns, μs (/us), ms, min, h (/hr), day, yr, kyr, Myr, Gyr.\n\n\n\n\n\n","category":"constant"},{"location":"units/#DynamicQuantities.Units.A","page":"Units","title":"DynamicQuantities.Units.A","text":"Current in Amperes. Available variants: nA, μA (/uA), mA, kA.\n\n\n\n\n\n","category":"constant"},{"location":"units/#DynamicQuantities.Units.K","page":"Units","title":"DynamicQuantities.Units.K","text":"Temperature in Kelvin. Available variant: mK.\n\n\n\n\n\n","category":"constant"},{"location":"units/#DynamicQuantities.Units.cd","page":"Units","title":"DynamicQuantities.Units.cd","text":"Luminosity in candela. Available variant: mcd.\n\n\n\n\n\n","category":"constant"},{"location":"units/#DynamicQuantities.Units.mol","page":"Units","title":"DynamicQuantities.Units.mol","text":"Amount in moles. Available variant: mmol.\n\n\n\n\n\n","category":"constant"},{"location":"units/#Derived-units","page":"Units","title":"Derived units","text":"","category":"section"},{"location":"units/","page":"Units","title":"Units","text":"Several derived SI units are available as well:","category":"page"},{"location":"units/","page":"Units","title":"Units","text":"Units.Hz\nUnits.N\nUnits.Pa\nUnits.J\nUnits.W\nUnits.C\nUnits.V\nUnits.F\nUnits.Ω\nUnits.T\nUnits.L\nUnits.bar","category":"page"},{"location":"units/#DynamicQuantities.Units.Hz","page":"Units","title":"DynamicQuantities.Units.Hz","text":"Frequency in Hertz. Available variants: kHz, MHz, GHz.\n\n\n\n\n\n","category":"constant"},{"location":"units/#DynamicQuantities.Units.N","page":"Units","title":"DynamicQuantities.Units.N","text":"Force in Newtons.\n\n\n\n\n\n","category":"constant"},{"location":"units/#DynamicQuantities.Units.Pa","page":"Units","title":"DynamicQuantities.Units.Pa","text":"Pressure in Pascals. Available variant: kPa.\n\n\n\n\n\n","category":"constant"},{"location":"units/#DynamicQuantities.Units.J","page":"Units","title":"DynamicQuantities.Units.J","text":"Energy in Joules. Available variant: kJ.\n\n\n\n\n\n","category":"constant"},{"location":"units/#DynamicQuantities.Units.W","page":"Units","title":"DynamicQuantities.Units.W","text":"Power in Watts. Available variants: kW, MW, GW.\n\n\n\n\n\n","category":"constant"},{"location":"units/#DynamicQuantities.Units.C","page":"Units","title":"DynamicQuantities.Units.C","text":"Charge in Coulombs.\n\n\n\n\n\n","category":"constant"},{"location":"units/#DynamicQuantities.Units.V","page":"Units","title":"DynamicQuantities.Units.V","text":"Voltage in Volts. Available variants: kV, MV, GV.\n\n\n\n\n\n","category":"constant"},{"location":"units/#DynamicQuantities.Units.F","page":"Units","title":"DynamicQuantities.Units.F","text":"Capacitance in Farads.\n\n\n\n\n\n","category":"constant"},{"location":"units/#DynamicQuantities.Units.Ω","page":"Units","title":"DynamicQuantities.Units.Ω","text":"Resistance in Ohms. Available variant: mΩ. Also available is ASCII ohm (with variant mohm).\n\n\n\n\n\n","category":"constant"},{"location":"units/#DynamicQuantities.Units.T","page":"Units","title":"DynamicQuantities.Units.T","text":"Magnetic flux density in Teslas.\n\n\n\n\n\n","category":"constant"},{"location":"units/#DynamicQuantities.Units.L","page":"Units","title":"DynamicQuantities.Units.L","text":"Volume in liters. Available variants: mL, dL.\n\n\n\n\n\n","category":"constant"},{"location":"units/#DynamicQuantities.Units.bar","page":"Units","title":"DynamicQuantities.Units.bar","text":"Pressure in bars.\n\n\n\n\n\n","category":"constant"},{"location":"symbolic_units/#Symbolic-Dimensions","page":"Symbolic Units","title":"Symbolic Dimensions","text":"","category":"section"},{"location":"symbolic_units/","page":"Symbolic Units","title":"Symbolic Units","text":"Whereas u\"...\" will automatically convert all units to the same base SI units, us\"...\" will not. This uses the SymbolicDimensions type, which is a subtype of AbstractDimensions that stores the dimensions symbolically. This is useful for keeping track of the original units and constants in a user-entered expression.","category":"page"},{"location":"symbolic_units/","page":"Symbolic Units","title":"Symbolic Units","text":"The two main functions for working with symbolic units are sym_uparse and us_str:","category":"page"},{"location":"symbolic_units/","page":"Symbolic Units","title":"Symbolic Units","text":"@us_str\nsym_uparse","category":"page"},{"location":"symbolic_units/#DynamicQuantities.@us_str","page":"Symbolic Units","title":"DynamicQuantities.@us_str","text":"us\"[unit expression]\"\n\nParse a string containing an expression of units and return the corresponding Quantity object with Float64 value. However, unlike the regular u\"...\" macro, this macro uses SymbolicDimensions for the dimension type, which means that all units and constants are stored symbolically and will not automatically expand to SI units. For example, us\"km/s^2\" would be parsed to Quantity(1.0, SymbolicDimensions, km=1, s=-2).\n\nNote that inside this expression, you also have access to the Constants module. So, for example, us\"Constants.c^2 * Hz^2\" would evaluate to Quantity(1.0, SymbolicDimensions, c=2, Hz=2). However, note that due to namespace collisions, a few physical constants are not available.\n\n\n\n\n\n","category":"macro"},{"location":"symbolic_units/#DynamicQuantities.SymbolicUnitsParse.sym_uparse","page":"Symbolic Units","title":"DynamicQuantities.SymbolicUnitsParse.sym_uparse","text":"sym_uparse(raw_string::AbstractString)\n\nParse a string containing an expression of units and return the corresponding Quantity object with Float64 value. However, that unlike the regular u\"...\" macro, this macro uses SymbolicDimensions for the dimension type, which means that all units and constants are stored symbolically and will not automatically expand to SI units. For example, sym_uparse(\"km/s^2\") would be parsed to Quantity(1.0, SymbolicDimensions, km=1, s=-2).\n\nNote that inside this expression, you also have access to the Constants module. So, for example, sym_uparse(\"Constants.c^2 * Hz^2\") would evaluate to Quantity(1.0, SymbolicDimensions, c=2, Hz=2). However, note that due to namespace collisions, a few physical constants are not available.\n\n\n\n\n\n","category":"function"},{"location":"symbolic_units/","page":"Symbolic Units","title":"Symbolic Units","text":"To convert a quantity to its regular base SI units, use expand_units:","category":"page"},{"location":"symbolic_units/","page":"Symbolic Units","title":"Symbolic Units","text":"expand_units","category":"page"},{"location":"symbolic_units/#DynamicQuantities.expand_units","page":"Symbolic Units","title":"DynamicQuantities.expand_units","text":"expand_units(q::Quantity{<:Any,<:SymbolicDimensions})\n\nExpand the symbolic units in a quantity to their base SI form. In other words, this converts a Quantity with SymbolicDimensions to one with Dimensions.\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"(Image: logo)","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: Dev) (Image: Build Status) (Image: Coverage)","category":"page"},{"location":"","page":"Home","title":"Home","text":"DynamicQuantities defines a simple statically-typed Quantity type for Julia. Physical dimensions are stored as a value, as opposed to a parametric type, as in Unitful.jl. This is done to allow for calculations where physical dimensions are not known at compile time.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Performance\nUsage\nTypes\nVectors","category":"page"},{"location":"#Performance","page":"Home","title":"Performance","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"DynamicQuantities can greatly outperform Unitful when the compiler cannot infer dimensions in a function:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using BenchmarkTools, DynamicQuantities; import Unitful\n\njulia> dyn_uni = 0.2u\"m^0.5 * kg * mol^3\"\n0.2 m¹ᐟ² kg mol³\n\njulia> unitful = convert(Unitful.Quantity, dyn_uni)\n0.2 kg m¹ᐟ² mol³\n\njulia> f(x, i) = x ^ i * 0.3;\n\njulia> @btime f($dyn_uni, 1);\n  8.759 ns (0 allocations: 0 bytes)\n\njulia> @btime f($unitful, 1);\n  30.083 μs (42 allocations: 1.91 KiB)","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Note the μ and n.) Here, the DynamicQuantities quantity object allows the compiler to build a function that is type stable, while the Unitful quantity object, which stores its dimensions in the type, requires type inference at runtime.","category":"page"},{"location":"","page":"Home","title":"Home","text":"However, if the dimensions in your function can be inferred by the compiler, then you can get better speeds with Unitful:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> g(x) = x ^ 2 * 0.3;\n\njulia> @btime g($dyn_uni);\n  10.051 ns (0 allocations: 0 bytes)\n\njulia> @btime g($unitful);\n  2.000 ns (0 allocations: 0 bytes)","category":"page"},{"location":"","page":"Home","title":"Home","text":"While both of these are type stable, because Unitful parametrizes the type on the dimensions, functions can specialize to units and the compiler can optimize away units from the code.","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You can create a Quantity object  by using the convenience macro u\"...\":","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> x = 0.3u\"km/s\"\n300.0 m s⁻¹\n\njulia> y = 42 * u\"kg\"\n42.0 kg\n\njulia> room_temp = 100u\"kPa\"\n100000.0 m⁻¹ kg s⁻²","category":"page"},{"location":"","page":"Home","title":"Home","text":"This supports a wide range of SI base and derived units, with common prefixes.","category":"page"},{"location":"","page":"Home","title":"Home","text":"You can also construct values explicitly with the Quantity type, with a value and keyword arguments for the powers of the physical dimensions (mass, length, time, current, temperature, luminosity, amount):","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> x = Quantity(300.0, length=1, time=-1)\n300.0 m s⁻¹","category":"page"},{"location":"","page":"Home","title":"Home","text":"Elementary calculations with +, -, *, /, ^, sqrt, cbrt, abs are supported:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> x * y\n12600.0 m kg s⁻¹\n\njulia> x / y\n7.142857142857143 m kg⁻¹ s⁻¹\n\njulia> x ^ 3\n2.7e7 m³ s⁻³\n\njulia> x ^ -1\n0.0033333333333333335 m⁻¹ s\n\njulia> sqrt(x)\n17.320508075688775 m¹ᐟ² s⁻¹ᐟ²\n\njulia> x ^ 1.5\n5196.152422706632 m³ᐟ² s⁻³ᐟ²","category":"page"},{"location":"","page":"Home","title":"Home","text":"Each of these values has the same type, which means we don't need to perform type inference at runtime.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Furthermore, we can do dimensional analysis by detecting DimensionError:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> x + 3 * x\n1.2 m¹ᐟ² kg\n\njulia> x + y\nERROR: DimensionError: 0.3 m¹ᐟ² kg and 10.2 kg² s⁻² have incompatible dimensions","category":"page"},{"location":"","page":"Home","title":"Home","text":"The dimensions of a Quantity can be accessed either with dimension(quantity) for the entire Dimensions object:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> dimension(x)\nm¹ᐟ² kg","category":"page"},{"location":"","page":"Home","title":"Home","text":"or with umass, ulength, etc., for the various dimensions:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> umass(x)\n1//1\n\njulia> ulength(x)\n1//2","category":"page"},{"location":"","page":"Home","title":"Home","text":"Finally, you can strip units with ustrip:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> ustrip(x)\n0.2","category":"page"},{"location":"#Unitful","page":"Home","title":"Unitful","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"DynamicQuantities works with quantities that are exclusively represented by their SI base units. This gives us type stability and greatly improves performance.","category":"page"},{"location":"","page":"Home","title":"Home","text":"However, performing calculations with physical dimensions is actually equivalent to working with a standardized unit system. Thus, you can use Unitful to parse units, and then use the DynamicQuantities->Unitful extension for conversion:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using Unitful: Unitful, @u_str; import DynamicQuantities\n\njulia> x = 0.5u\"km/s\"\n0.5 km s⁻¹\n\njulia> y = convert(DynamicQuantities.Quantity, x)\n500.0 m s⁻¹\n\njulia> y2 = y^2 * 0.3\n75000.0 m² s⁻²\n\njulia> x2 = convert(Unitful.Quantity, y2)\n75000.0 m² s⁻²\n\njulia> x^2*0.3 == x2\ntrue","category":"page"},{"location":"#Types","page":"Home","title":"Types","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Both a Quantity's values and dimensions are of arbitrary type. By default, dimensions are stored as a DynamicQuantities.FixedRational{Int32,C} object, which represents a rational number with a fixed denominator C. This is much faster than Rational.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> typeof(0.5u\"kg\")\nQuantity{Float64, FixedRational{Int32, 25200}","category":"page"},{"location":"","page":"Home","title":"Home","text":"You can change the type of the value field by initializing with a value explicitly of the desired type.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> typeof(Quantity(Float16(0.5), mass=1, length=1))\nQuantity{Float16, FixedRational{Int32, 25200}}","category":"page"},{"location":"","page":"Home","title":"Home","text":"or by conversion:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> typeof(convert(Quantity{Float16}, 0.5u\"m/s\"))\nQuantity{Float16, DynamicQuantities.FixedRational{Int32, 25200}}","category":"page"},{"location":"","page":"Home","title":"Home","text":"For many applications, FixedRational{Int8,6} will suffice, and can be faster as it means the entire Dimensions struct will fit into 64 bits. You can change the type of the dimensions field by passing the type you wish to use as the second argument to Quantity:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using DynamicQuantities\n\njulia> R8 = DynamicQuantities.FixedRational{Int8,6};\n\njulia> R32 = DynamicQuantities.FixedRational{Int32,2^4 * 3^2 * 5^2 * 7};  # Default\n\njulia> q8 = [Quantity(randn(), R8, length=rand(-2:2)) for i in 1:1000];\n\njulia> q32 = [Quantity(randn(), R32, length=rand(-2:2)) for i in 1:1000];\n\njulia> f(x) = @. x ^ 2 * 0.5;\n\njulia> @btime f($q8);\n  7.750 μs (1 allocation: 15.75 KiB)\n\njulia> @btime f($q32);\n  8.417 μs (2 allocations: 39.11 KiB)","category":"page"},{"location":"#Vectors","page":"Home","title":"Vectors","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"There is not a separate class for vectors, but you can create units like so:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> randn(5) .* u\"m/s\"\n5-element Vector{Quantity{Float64, DynamicQuantities.FixedRational{Int32, 25200}}}:\n 1.1762086954956399 m s⁻¹\n 1.320811324040591 m s⁻¹\n 0.6519033652437799 m s⁻¹\n 0.7424822374423569 m s⁻¹\n 0.33536928068133726 m s⁻¹","category":"page"},{"location":"","page":"Home","title":"Home","text":"Because it is type stable, you can have mixed units in a vector too:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> v = [Quantity(randn(), mass=rand(0:5), length=rand(0:5)) for _=1:5]\n5-element Vector{Quantity{Float64, DynamicQuantities.FixedRational{Int32, 25200}}}:\n 0.4309293892461158 kg⁵\n 1.415520139801276\n 1.2179414706524276 m³ kg⁴\n -0.18804207255117408 m³ kg⁵\n 0.52123911329638 m³ kg²","category":"page"},{"location":"types/#Types","page":"Types","title":"Types","text":"","category":"section"},{"location":"types/","page":"Types","title":"Types","text":"Quantity\nDimensions","category":"page"},{"location":"types/#DynamicQuantities.Quantity","page":"Types","title":"DynamicQuantities.Quantity","text":"Quantity{T,D<:AbstractDimensions} <: AbstractQuantity{T,D}\n\nPhysical quantity with value value of type T and dimensions dimensions of type D. For example, the velocity of an object with mass 1 kg and velocity 2 m/s is Quantity(2, mass=1, length=1, time=-1). You should access these fields with ustrip(q), and dimension(q). You can access specific dimensions with ulength(q), umass(q), utime(q), ucurrent(q), utemperature(q), uluminosity(q), and uamount(q).\n\nSeverals operators in Base are extended to work with Quantity objects, including *, +, -, /, abs, ^, sqrt, and cbrt, which manipulate dimensions according to the operation.\n\nFields\n\nvalue::T: value of the quantity of some type T. Access with ustrip(::Quantity)\ndimensions::D: dimensions of the quantity. Access with dimension(::Quantity)\n\nConstructors\n\nQuantity(x; kws...): Construct a quantity with value x and dimensions given by the keyword arguments. The value  type is inferred from x. R is set to DEFAULT_DIM_TYPE.\nQuantity(x, ::Type{D}; kws...): Construct a quantity with value x with dimensions given by the keyword arguments,  and the dimensions type set to D.\nQuantity(x, d::D): Construct a quantity with value x and dimensions d of type D.\nQuantity{T}(...): As above, but converting the value to type T. You may also pass a Quantity as input.\nQuantity{T,D}(...): As above, but converting the value to type T and dimensions to D. You may also pass a Quantity as input.\n\n\n\n\n\n","category":"type"},{"location":"types/#DynamicQuantities.Dimensions","page":"Types","title":"DynamicQuantities.Dimensions","text":"Dimensions{R<:Real} <: AbstractDimensions{R}\n\nA type representing the dimensions of a quantity, with each field giving the power of the corresponding dimension. For example, the dimensions of velocity are Dimensions(length=1, time=-1). Each of the 7 dimensions are stored using the type R, which is by default a rational number.\n\nFields\n\nlength: length dimension (i.e., meters^(length))\nmass: mass dimension (i.e., kg^(mass))\ntime: time dimension (i.e., s^(time))\ncurrent: current dimension (i.e., A^(current))\ntemperature: temperature dimension (i.e., K^(temperature))\nluminosity: luminosity dimension (i.e., cd^(luminosity))\namount: amount dimension (i.e., mol^(amount))\n\nConstructors\n\nDimensions(args...): Pass all the dimensions as arguments. R is set to DEFAULT_DIM_BASE_TYPE.\nDimensions(; kws...): Pass a subset of dimensions as keyword arguments. R is set to DEFAULT_DIM_BASE_TYPE.\nDimensions(::Type{R}; kws...) or Dimensions{R}(; kws...): Pass a subset of dimensions as keyword arguments, with the output type set to Dimensions{R}.\nDimensions{R}(): Create a dimensionless object typed as Dimensions{R}.\nDimensions{R}(d::Dimensions): Copy the dimensions from another Dimensions object, with the output type set to Dimensions{R}.\n\n\n\n\n\n","category":"type"},{"location":"types/","page":"Types","title":"Types","text":"There are also abstract types available. There are no required functions to build an interface, most relevant functions are defined on the abstract functions (including constructors).","category":"page"},{"location":"types/","page":"Types","title":"Types","text":"AbstractDimensions\nAbstractQuantity","category":"page"},{"location":"types/#DynamicQuantities.AbstractDimensions","page":"Types","title":"DynamicQuantities.AbstractDimensions","text":"AbstractDimensions{R}\n\nAn abstract type for dimension types. R is the type of the exponents of the dimensions, and by default is set to DynamicQuantities.DEFAULT_DIM_BASE_TYPE. AbstractDimensions are used to store the dimensions of AbstractQuantity objects. Together these enable many operators in Base to manipulate dimensions. This type has generic constructors for creating dimension objects, so user-defined dimension types can be created by simply subtyping AbstractDimensions, without the need to define many other functions.\n\nThe key function that one could wish to overload is DynamicQuantities.dimension_name(::AbstractDimensions, k::Symbol) for mapping from a field name to a base unit (e.g., length by default maps to m). You may also need to overload DynamicQuantities.constructor_of(::Type{T}) in case of non-standard construction.\n\n\n\n\n\n","category":"type"},{"location":"types/#DynamicQuantities.AbstractQuantity","page":"Types","title":"DynamicQuantities.AbstractQuantity","text":"AbstractQuantity{T,D}\n\nAn abstract type for quantities. T is the type of the value of the quantity, and D is the type of the dimensions of the quantity. By default, D is set to DynamicQuantities.DEFAULT_DIM_TYPE. T is inferred from the value in a calculation, but in other cases is defaulted to DynamicQuantities.DEFAULT_VALUE_TYPE. It is assumed that the value is stored in the :value field, and the dimensions object is stored in the :dimensions field. These fields can be accessed with ustrip and dimension, respectively. Many operators in Base are defined on AbstractQuantity objects, including +, -, *, /, ^, sqrt, cbrt, abs.\n\n\n\n\n\n","category":"type"},{"location":"types/","page":"Types","title":"Types","text":"Note also that the Quantity object can take a custom AbstractDimensions as input, so there is often no need to subtype AbstractQuantity separately.","category":"page"},{"location":"types/","page":"Types","title":"Types","text":"Another type which subtypes AbstractDimensions is SymbolicDimensions:","category":"page"},{"location":"types/","page":"Types","title":"Types","text":"SymbolicDimensions","category":"page"},{"location":"types/#DynamicQuantities.SymbolicDimensions","page":"Types","title":"DynamicQuantities.SymbolicDimensions","text":"SymbolicDimensions{R} <: AbstractDimensions{R}\n\nAn AbstractDimensions with one dimension for every unit and constant symbol. This is to allow for lazily reducing to SI base units, whereas Dimensions is always in SI base units. Furthermore, SymbolicDimensions stores dimensions using a sparse vector for efficiency (since there are so many unit symbols).\n\nYou can convert a quantity using SymbolicDimensions as its dimensions to one which uses Dimensions as its dimensions (i.e., base SI units) expand_units.\n\n\n\n\n\n","category":"type"}]
}

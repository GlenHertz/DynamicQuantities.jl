Base.:*(l::AbstractDimensions, r::AbstractDimensions) = map_dimensions(+, l, r)
Base.:*(l::AbstractQuantity, r::AbstractQuantity) = new_quantity(typeof(l), ustrip(l) * ustrip(r), dimension(l) * dimension(r))
Base.:*(l::AbstractQuantity, r::AbstractDimensions) = new_quantity(typeof(l), ustrip(l), dimension(l) * r)
Base.:*(l::AbstractDimensions, r::AbstractQuantity) = new_quantity(typeof(r), ustrip(r), l * dimension(r))
Base.:*(l::AbstractQuantity, r) = new_quantity(typeof(l), ustrip(l) * r, dimension(l))
Base.:*(l, r::AbstractQuantity) = new_quantity(typeof(r), l * ustrip(r), dimension(r))
Base.:*(l::AbstractDimensions, r) = new_quantity(typeof(l), r, l)
Base.:*(l, r::AbstractDimensions) = new_quantity(typeof(r), l, r)

Base.:/(l::AbstractDimensions, r::AbstractDimensions) = map_dimensions(-, l, r)
Base.:/(l::AbstractQuantity, r::AbstractQuantity) = new_quantity(typeof(l), ustrip(l) / ustrip(r), dimension(l) / dimension(r))
Base.:/(l::AbstractQuantity, r::AbstractDimensions) = new_quantity(typeof(l), ustrip(l), dimension(l) / r)
Base.:/(l::AbstractDimensions, r::AbstractQuantity) = new_quantity(typeof(r), inv(ustrip(r)), l / dimension(r))
Base.:/(l::AbstractQuantity, r) = new_quantity(typeof(l), ustrip(l) / r, dimension(l))
Base.:/(l, r::AbstractQuantity) = l * inv(r)
Base.:/(l::AbstractDimensions, r) = new_quantity(typeof(l), inv(r), l)
Base.:/(l, r::AbstractDimensions) = new_quantity(typeof(r), l, inv(r))

Base.:+(l::AbstractQuantity, r::AbstractQuantity) = dimension(l) == dimension(r) ? new_quantity(typeof(l), ustrip(l) + ustrip(r), dimension(l)) : throw(DimensionError(l, r))
Base.:-(l::AbstractQuantity) = new_quantity(typeof(l), -ustrip(l), dimension(l))
Base.:-(l::AbstractQuantity, r::AbstractQuantity) = l + (-r)

Base.:+(l::AbstractQuantity, r) = dimension(l) == dimension(r) ? new_quantity(typeof(l), ustrip(l) + r, dimension(l)) : throw(DimensionError(l, r))
Base.:+(l, r::AbstractQuantity) = dimension(l) == dimension(r) ? new_quantity(typeof(r), l + ustrip(r), dimension(r)) : throw(DimensionError(l, r))
Base.:-(l::AbstractQuantity, r) = l + (-r)
Base.:-(l, r::AbstractQuantity) = l + (-r)

_pow(l::AbstractDimensions{R}, r::R) where {R} = map_dimensions(Base.Fix1(*, r), l)
_pow(l::AbstractQuantity{T,R}, r::R) where {T,R} = new_quantity(typeof(l), ustrip(l)^convert(T, r), _pow(dimension(l), r))
Base.:^(l::AbstractDimensions{R}, r::Number) where {R} = _pow(l, tryrationalize(R, r))
Base.:^(l::AbstractQuantity{T,R}, r::Number) where {T,R} = _pow(l, tryrationalize(R, r))

Base.inv(d::AbstractDimensions) = map_dimensions(-, d)
Base.inv(q::AbstractQuantity) = new_quantity(typeof(q), inv(ustrip(q)), inv(dimension(q)))

Base.sqrt(d::AbstractDimensions{R}) where {R} = d^inv(convert(R, 2))
Base.sqrt(q::AbstractQuantity) = new_quantity(typeof(q), sqrt(ustrip(q)), sqrt(dimension(q)))
Base.cbrt(d::AbstractDimensions{R}) where {R} = d^inv(convert(R, 3))
Base.cbrt(q::AbstractQuantity) = new_quantity(typeof(q), cbrt(ustrip(q)), cbrt(dimension(q)))

Base.abs(q::AbstractQuantity) = new_quantity(typeof(q), abs(ustrip(q)), dimension(q))

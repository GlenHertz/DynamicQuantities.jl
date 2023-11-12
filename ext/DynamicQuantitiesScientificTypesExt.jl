module DynamicQuantitiesScientificTypesExt

import DynamicQuantities: UnionAbstractQuantity, ustrip
import ScientificTypes as ST
import ScientificTypes.ScientificTypesBase as STB

STB.scitype(x::UnionAbstractQuantity, C::ST.DefaultConvention) = STB.scitype(ustrip(x), C)
STB.Scitype(::Type{<:UnionAbstractQuantity{T}}, C::ST.DefaultConvention) where {T} = STB.Scitype(T, C)

end

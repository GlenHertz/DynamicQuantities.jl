var documenterSearchIndex = {"docs":
[{"location":"index_base/","page":"DynamicUnits","title":"DynamicUnits","text":"CurrentModule = DynamicUnits","category":"page"},{"location":"index_base/#DynamicUnits","page":"DynamicUnits","title":"DynamicUnits","text":"","category":"section"},{"location":"index_base/","page":"DynamicUnits","title":"DynamicUnits","text":"Documentation for DynamicUnits.","category":"page"},{"location":"index_base/","page":"DynamicUnits","title":"DynamicUnits","text":"","category":"page"},{"location":"index_base/","page":"DynamicUnits","title":"DynamicUnits","text":"Modules = [DynamicUnits]","category":"page"},{"location":"#DynamicUnits","page":"Home","title":"DynamicUnits","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Stable) (Image: Dev) (Image: Build Status) (Image: Coverage)","category":"page"},{"location":"","page":"Home","title":"Home","text":"This defines a simple statically-typed Quantity type for Julia. Physical dimensions are stored as a value, as opposed to a parametric type, as in Unitful.jl. This is done to allow for calculations where physical dimensions are not known at compile time.","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You can create a Quantity object with a value and keyword arguments for the powers of the physical dimensions (mass, length, time, current, temperature, luminosity, amount):","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> x = Quantity(0.2, mass=1, length=0.5)\n0.2 𝐋^(1//2) 𝐌^1\n\njulia> y = Quantity(10.2, mass=2, time=-2)\n10.2 𝐌^2 𝐓^(-2)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Elementary calculations with +, -, *, /, ^, sqrt, cbrt are supported:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> x * y\n2.04 𝐋^(1//2) 𝐌^3 𝐓^(-2)\n\njulia> x / y\n0.019607843137254905 𝐋^(1//2) 𝐌^(-1) 𝐓^2\n\njulia> x ^ 3\n0.008000000000000002 𝐋^(3//2) 𝐌^3\n\njulia> x ^ -1\n5.0 𝐋^(-1//2) 𝐌^(-1)\n\njulia> sqrt(x)\n0.4472135954999579 𝐋^(1//4) 𝐌^(1//2)\n\njulia> x ^ 1.5\n0.0894427190999916 𝐋^(3//4) 𝐌^(3//2)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Each of these values has the same type, thus obviating the need for type inference at runtime.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Furthermore, we can do dimensional analysis automatically:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> x + 3 * x\n0.8 𝐋^(1//2) 𝐌^1\n\njulia> x + y\nINVALID","category":"page"},{"location":"","page":"Home","title":"Home","text":"We can see the second one has valid(quantity) == false. This doesn't throw an error by default, as it allows for stable return values.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The dimensions of a Quantity can be accessed either with dimensions(quantity) for the entire Dimensions object:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> dimensions(x)\n𝐋^(1//2) 𝐌^1","category":"page"},{"location":"","page":"Home","title":"Home","text":"or with umass, ulength, etc., for the various dimensions:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> umass(x)\n1\n\njulia> ulength(x)\n1//2","category":"page"},{"location":"","page":"Home","title":"Home","text":"Finally, you can strip units with ustrip:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> ustrip(x)\n0.2","category":"page"},{"location":"#Units","page":"Home","title":"Units","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Despite the name, DynamicUnits.jl does not actually work with units. Instead, it works with dimensions. You can use Unitful to convert to a consistent unit system (e.g., SI) from units, pass the result to DynamicUnits, perform your calculations, and then convert back to units.","category":"page"},{"location":"#Vectors","page":"Home","title":"Vectors","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"There is not a separate class for vectors, but you can create units like so:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> randn(5) .* Dimensions(mass=2/5, length=2)\n5-element Vector{Quantity{Float64}}:\n -0.72119725412798 𝐋^2 𝐌^(2//5)\n 0.6443068291470538 𝐋^2 𝐌^(2//5)\n 1.2137320667123697 𝐋^2 𝐌^(2//5)\n 0.5125746727860678 𝐋^2 𝐌^(2//5)\n -0.6511788444561991 𝐋^2 𝐌^(2//5)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Because it is type stable, you can have mixed units in a vector too:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> v = [Quantity(randn(), mass=rand(0:5), length=rand(0:5)) for _=1:5]\n5-element Vector{Quantity{Float64}}:\n 0.6531745868307951 \n 0.5260730397041357 𝐋^2 𝐌^5\n 1.0827471975303913 𝐌^1\n 1.5524518860763528 𝐌^1\n 0.5376635007504901 𝐋^3 𝐌^1","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = DynamicUnits","category":"page"},{"location":"#DynamicUnits-2","page":"Home","title":"DynamicUnits","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for DynamicUnits.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [DynamicUnits]","category":"page"}]
}

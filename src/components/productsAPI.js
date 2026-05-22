// ===============================
// Get all products (no filtering)
// ===============================
export const getAllProducts = async () => {
    // Send request to fetch all products
    const res = await fetch('https://dummyjson.com/products');

    // Parse response to JSON and return it
    return res.json();
};


// ==========================================
// Get all clothing products (mens + womens)
// ==========================================
export const allCloths = async () => {

    // Step 1: Fetch all categories
    const res = await fetch('https://dummyjson.com/products/categories');
    const categories = await res.json();

    // Step 2: Normalize category format (handle string or object)
    // Then filter only categories related to mens or womens clothing
    const clothingCategories = categories.filter(cat => {
        const slug = typeof cat === "string" ? cat : cat.slug;
        return slug.startsWith("mens") || slug.startsWith("womens");
    });

    // Step 3: Fetch products for each selected category in parallel
    const results = await Promise.all(
        clothingCategories.map(cat => {
            const slug = typeof cat === "string" ? cat : cat.slug;

            return fetch(`https://dummyjson.com/products/category/${slug}`)
                .then(res => res.json()); // Convert each response to JSON
        })
    );

    // Step 4: Flatten all products into one array
    return results.flatMap(r => r.products);
};


// ==================================
// Get ONLY mens clothing products
// ==================================
export const mensCloths = async () => {

    // Step 1: Fetch all categories
    const res = await fetch('https://dummyjson.com/products/categories');
    const categories = await res.json();

    // Step 2: Normalize and filter ONLY mens categories
    const mensCategories = categories.filter(cat => {
        const slug = typeof cat === "string" ? cat : cat.slug;
        return slug.startsWith("mens"); // Ensures only mens categories
    });

    // Step 3: Fetch products for each mens category
    const results = await Promise.all(
        mensCategories.map(cat => {
            const slug = typeof cat === "string" ? cat : cat.slug;

            return fetch(`https://dummyjson.com/products/category/${slug}`)
                .then(res => res.json());
        })
    );

    // Step 4: Merge all products into one array
    return results.flatMap(r => r.products);
};

// ==================================
// Get ONLY womens clothing products
// ==================================

export const womensCloths = async () => {
    // Step 1: Fetch all categories
    const res = await fetch('https://dummyjson.com/products/categories');
    const categories = await res.json();

    // Step 2: Normalize and filter ONLY womens categories

    const womensCategories = categories.filter(cat => {
        const slug = typeof cat === "string" ? cat : cat.slug;
        return slug.startsWith("womens");
    })

    // Step 3: Fetch products for each mens category
    const results = await Promise.all(
        womensCategories.map(cat => {
            const slug = typeof cat === "string" ? cat : cat.slug;

            return fetch(`https://dummyjson.com/products/category/${slug}`)
                .then(res => res.json());
  
        })
    )
    // Step 4: Merge all products into one array
    return results.flatMap(r => r.products);

};


// ===============================
// Get all products ( filtering top rated)
// ===============================
export const topRatedProducts = async () => {
    // Send request to fetch all products
    const res = await fetch('https://dummyjson.com/products');

    // Parse response to JSON and return it
    const data = await res.json();

    //filtered by top rated
    return data.products.filter(item => item.rating >= 4)
    
  
};


// ==================================
// Get ONLY electronics products
// ==================================
export const electronicsProducts = async () => {

    // Step 1: Fetch all categories
    const res = await fetch('https://dummyjson.com/products/categories');
    const categories = await res.json();

    // Step 2: Normalize and filter electronics products categories
    const electronicsCategories = categories.filter(cat => {
        const slug = typeof cat === "string" ? cat : cat.slug;
        return slug.includes("smartphones") || slug.includes("laptops"); // Ensures electronics products categories
    });

    // Step 3: Fetch products for eachelectronics products category
    const results = await Promise.all(
        electronicsCategories.map(cat => {
            const slug = typeof cat === "string" ? cat : cat.slug;

            return fetch(`https://dummyjson.com/products/category/${slug}`)
                .then(res => res.json());
        })
    );

    // Step 4: Merge all products into one array
    return results.flatMap(r => r.products);
};


// ===============================
// Get single product
// ===============================
export const getSingleProduct = async (id) => {
    // Send request to fetch single product by id
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    // Check if response is ok
    if (!res.ok) {
        throw new Error("Failed to fetch product");
    }

    // Parse response to JSON and return it
    return await res.json();
};
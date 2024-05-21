import { MedusaRequest, MedusaResponse } from "@medusajs/medusa";

export async function getProductsList(
    req: MedusaRequest,
    res: MedusaResponse
): Promise<void> {
    const productService = req.scope.resolve("productService");
    const { colors, styles, rooms} = req.query;

    const colorsArray = typeof colors === 'string' ? colors.split(',').map((color: string) => color.trim().toLowerCase()) : Array.isArray(colors) ? colors : [];
    const stylesArray = typeof styles === 'string' ? styles.split(',').map((style: string) => style.trim().toLowerCase()) : Array.isArray(styles) ? styles : [];
    const roomsArray = typeof rooms === 'string' ? rooms.split(',').map((room: string) => room.trim().toLowerCase()) : Array.isArray(rooms) ? rooms : [];
    
    try {
        let products = await productService.list({}, { relations: ["variants"] });
        if (colorsArray.length > 0 || stylesArray.length > 0 || roomsArray.length > 0) {
            products = products.filter((product: any) => {
                const variantTitles = product.variants.map((variant: any) => variant.title.toLowerCase());
                let hasValidColor = colorsArray.length === 0;
                let hasValidStyle = stylesArray.length === 0;
                let hasValidRoom = roomsArray.length === 0;
                if (colorsArray.length > 0) hasValidColor = colorsArray.some((color: any) => variantTitles.includes(color));
                if (stylesArray.length > 0) hasValidStyle = stylesArray.some((style: any) => variantTitles.includes(style));
                if (roomsArray.length > 0) hasValidRoom = roomsArray.some((room: any) => variantTitles.includes(room));
                
                return hasValidColor && hasValidStyle && hasValidRoom;
            });
        }
        res.status(200).json({ products });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred while fetching products." });
    }
}



const features = [
    {
        id: 101,
        name: 'Home',
        items: [
            { id: 1, name: "Slider", price: 200000 , description: "Sempardak bukanlah hak segala bangsa yang hakiki dan jumawa", default: true },
            { id: 2, name: "Search produk", price: 240000 , description: "Mungkin kita bukanlah putra terbaik bangsa, namun ketika nasi ayam sedang diskon, maka itu adalah ikan", default: true },
            { id: 3, name: "Filter produk", price: 350000 , description: "Kenapa takut jika tak naik haji? Bukankah orang India tak pernah mandi junub?", default: true },
            { id: 4, name: "List produk - Hot", price: 280000 , description: "Sesuatu yang dikatakan dengan lantang adalah kebiasaan ikan gabus yang semenjana", default: true },
            { id: 5, name: "List produk - Promo", price: 320000 , description: "Sempardak bukanlah hak segala bangsa yang hakiki dan jumawa", default: true },
            { id: 6, name: "List produk - Rekomendasi", price: 500000 , description: "Mungkin kita bukanlah putra terbaik bangsa, namun ketika nasi ayam sedang diskon, maka itu adalah perumpamaan", default: false },
            { id: 7, name: "Tour", price: 790000 , description: "Kenapa takut jika tak naik haji? Bukankah orang India tak pernah mandi junub?", default: false }
        ],
    },
    {
        id: 102,
        name: 'Product detail',
        items: [
            { id: 8, name: "Semua detail produk", price: 500000 , description: "Sempardak bukanlah hak segala bangsa yang hakiki dan jumawa", default: true },
            { id: 9, name: "Slider images", price: 700000 , description: "Mungkin kita bukanlah putra terbaik bangsa, namun ketika nasi ayam sedang diskon, maka itu adalah ikan", default: true },
            { id: 10, name: "Rating", price: 1000000 , description: "Kenapa takut jika tak naik haji? Bukankah orang India tak pernah mandi junub?", default: true },
            { id: 11, name: "Share to social medias", price: 1000000 , description: "Sesuatu yang dikatakan dengan lantang adalah kebiasaan ikan gabus yang semenjana", default: false },
            { id: 12, name: "Comments", price: 1200000 , description: "Sempardak bukanlah hak segala bangsa yang hakiki dan jumawa", default: false },
            { id: 13, name: "Magnifying image", price: 600000 , description: "Mungkin kita bukanlah putra terbaik bangsa, namun ketika nasi ayam sedang diskon, maka itu adalah perumpamaan", default: false }
        ],
    },
    {
        id: 103,
        name: 'Checkout',
        items: [
            {
                id: 14,
                name: "Shipping address",
                description: "Sempardak bukanlah hak segala bangsa yang hakiki dan jumawa",
                subitems: [
                    { id: 141, parent: "Shipping address", name: 'Defaulting form value', price: 1000000, description: "Sempardak bukanlah hak segala bangsa yang hakiki dan jumawa", default: true },
                    { id: 142, parent: "Shipping address", name: 'Dropshipper', price: 700000, description: "Mungkin kita bukanlah putra terbaik bangsa, namun ketika nasi ayam sedang diskon", default: false }
                ]
            },
            {
                id: 15,
                name: "Expedition",
                description: "Page milih ekspedisi",
                subitems: [
                    { id: 151, parent: "Expedition", name: 'Tampilkan data ongkir tiap ekspedisi', price: 800000, description: "Data ongkir ditampilkan dengan sempurna dan segalanya ada", default: true },
                    { id: 152, parent: "Expedition", name: 'Pilihan: TIKI', price: 500000, description: "Ekspedisi TIKI", default: true },
                    { id: 153, parent: "Expedition", name: 'Pilihan: JNE', price: 500000, description: "Ekspedisi JNE", default: true },
                    { id: 154, parent: "Expedition", name: 'Pilihan: Pos Indonesia', price: 500000, description: "Ekspedisi Pos Indonesia", default: false },
                    { id: 155, parent: "Expedition", name: 'Pilihan: Si Cepat', price: 500000, description: "Ekspedisi Si Cepat", default: false },
                    { id: 156, parent: "Expedition", name: 'Pilihan: Lion Parcel', price: 500000, description: "Ekspedisi Lion Parcel", default: false },
                    { id: 157, parent: "Expedition", name: 'Pilihan: JNT', price: 500000, description: "Ekspedisi JNT", default: false }
                ]
            },
            {
                id: 16,
                name: "Payment",
                description: "Page milih metode pembayaran",
                subitems: [
                    { id: 161, parent: "Payment", name: 'Pilihan: Transfer Bank', price: 1000000, description: "Metode: Transfer Bank", default: true },
                    { id: 162, parent: "Payment", name: 'Pilihan: Deposit', price: 1000000, description: "Metode: Dana dari Deposit", default: false },
                    { id: 163, parent: "Payment", name: 'Pilihan: Kartu Kredit/Debit', price: 1000000, description: "Metode: Kartu Kredit", default: false },
                    { id: 164, parent: "Payment", name: 'Pilihan: Indomaret', price: 1000000, description: "Metode: Bayar via Indomaret", default: false }
                ]
            },
            {
                id: 17,
                name: "Summary",
                description: "Page ringkasan order sebelum placing order",
                subitems: [
                    { id: 171, parent: "Summary", name: 'Tampilkan data summary order', price: 500000, description: "Ringkasan data pesanan user", default: true }
                ]
            }
        ],
    },
]

export default features
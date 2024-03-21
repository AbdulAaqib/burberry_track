import Image from "next/image";

export default function Home() {
  return (
    <head>
        <title>Burberry Web Page</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet">
        <style>
            body {
                font-family: Arial, sans-serif;
            }
            #full-height-section {
                height: calc(100vh - 3rem); 
            }
            .product-card {
                width: 100%; 
            }
        </style>
    </head>
    <body class="bg-gray-200">
        <header class="w-full p-4 bg-white flex justify-center items-center shadow-md">
            <img id="logo" class="h-10" src="https://source.unsplash.com/random/?burberry" />
        </header>
        <section class="flex items-center justify-center" id="full-height-section">
            <div class="product-card bg-white rounded-lg overflow-hidden shadow-lg m-3">
                <div class="flex overflow-hidden">
                    <div id="productImage" class="w-1/2 bg-cover"></div>
                    <div class="w-1/2 p-4">
                        <h1 class="text-gray-900 font-bold text-3xl mb-1">Product Name</h1>
                        <p class="text-gray-700 text-base">Product Details:</p>
                        <table class="table-auto w-full">
                            <thead>
                                <tr>
                                    <th class="px-4 py-2">Materials</th>
                                    <th class="px-4 py-2">Country of Origin</th>
                                    <th class="px-4 py-2">Date Sourced</th>
                                </tr>
                            </thead>
                            <tbody id="productDetails">
                            </tbody>
                        </table>
                        <p class="text-gray-700 text-sm mt-2">Materials listed are in order of sourcing date</p>
                    </div>
                </div>
                <div class="p-4">
                    <p class="text-gray-700 text-base">Blockchain Product ID:</p>
                    <p id="blockchainID" class="text-gray-900 font-bold text-xl"></p>
                </div>
            </div>
        </section>
        <script>
            document.getElementById('productImage').style.backgroundImage = 'url(https://source.unsplash.com/random)';
            const productInfo = [
              { materials: 'Cotton', country: 'USA', dateSourced: '01/01/2021' },
              { materials: 'Wool', country: 'Australia', dateSourced: '02/02/2021' },
              { materials: 'Polyester', country: 'China', dateSourced: '03/03/2021' }
            ];
            const detailsTable = document.getElementById('productDetails');
            
            productInfo.forEach(info => {
                const row = detailsTable.insertRow();
                const cell1 = row.insertCell();
                const cell2 = row.insertCell();
                const cell3 = row.insertCell();

                cell1.textContent = info.materials;
                cell2.textContent = info.country;
                cell3.textContent = info.dateSourced;
            });
            document.getElementById('blockchainID').textContent = '00000x';
        </script>
    </body>
  );
}

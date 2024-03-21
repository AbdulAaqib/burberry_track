import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [iframeHeight, setIframeHeight] = useState(0);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const { contentDocument } = iframeRef.current;
      if (contentDocument) {
        const bodyHeight = contentDocument.body.scrollHeight;
        setIframeHeight(bodyHeight);
      }
    }
  }, []);

  const srcDoc = `<!DOCTYPE html>
    <html style="height: 100%;">
      <head>
        <title>Burberry Web Page</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet">
        <style>
          body, html {
            height: 100%;
            margin: 0;
            padding: 0;
          }
          #full-height-section {
            min-height: calc(100vh - 4rem);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .product-card {
            width: 80%;
            max-width: 800px;
            display: flex;
            flex-direction: column;
          }
          .product-content {
            flex: 1;
          }
        </style>
      </head>
      <body class="bg-gray-200">
        <header class="w-full p-4 bg-white flex justify-center items-center shadow-md">
          <img class="h-10" src="https://lh3.googleusercontent.com/fife/ALs6j_Hol2Y3jv1Ke2KdpmZd84PcC1p7MomzK8kY3sWTlATjpV3ycNEwbyFmrzPs1GnczLGlq3QiIg6rVvKfSp64HuXyjaKrhcYKd6o-yJpX3dTq31IdcqwWMyPWRr8UYbG7oNyHDm_Zyu1--y-bMI4iRw70yyKPimQ1Dssfmjr52FcGAEpg6izEBWJ-086jl9ALzDcfXDNiUBGf176VaM7NV-ODpimFu2yLS_ZmfSSAdmT15EU2nitPSODIIaMx2QXshLlcPD-VGYmcxtxDjQP_06tdH4sobt6OokznoCyea56ctCoy-BrWumgtQygJfpfVdaZE-KCTnGDOQL02GwgGhLBAoqaOMw8lI3WiRQOV8C1JCMbYceBXN9TAkb-AF97VJb2Qq0wWroJi94z6y_YHRf5--Gkue86kPvNNLuD3T6AGzPSWdcaFOk0m-oKzmrkC46wQaH26XT8VEISZF4dLCkvtqof6_tWC2OejNdNtB_T-JFizZByNKuVftTdJFmn-G57x09Ik6WqvXjQPQ26iccIKdoNhQ_3btiFSpEk4tG2WpcbrqviCX7htaJIHTsBXR4-tldbwyTKFNmuhyvDcCIfOwJ43Qq0BTpil7C4aUS-69JyZXUbvc9FCp4DKaC5765HXm4Zc4EF93dsWiL4oI7zsoh5ObeLT56NJR_DyXTgy8dDsCcscNST5-EBWGQbsXl69pKqcqjQM0MtPT4LcB6FzQo0Z4vqbzXo8s8GL8kp5w98ngnctpqRfpcRlkapfiYvmHnkiAJizv8VouplQQcTH6yXkr_VLiAIqD93PUW0e3Do4s-e6tgUTCM0vJLrVgzMgWoIp5atCf-eSpU11vg7GGVNM_xDpJFxdr6zf9JSqRUb_jB2T4JCQ0Yf4FloFkn0FuFIh_hAT_YCfiRr2_x1EYuM2rLc62M47FtHzXcMkJA7YMauj10HqEvf95hdQAMF1Y5ENBP-o6TP1M7D7wM-uAalE6J1sASq6ZUw=w1920-h863" alt="Burberry Logo" width={100} height={100} />
        </header>
        <section id="full-height-section">
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
                  <tbody id="productDetails"></tbody>
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
    </html>`;

  return <iframe ref={iframeRef} style={{ width: "100%", height: `${iframeHeight}px`, border: "none" }} srcDoc={srcDoc} />;
}

import Image from "next/image";

export default function Home() {
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
            height: 80%;
            max-height: 600px;
            display: flex;
            flex-direction: column;
          }
          .product-content {
            flex: 1;
            overflow-y: auto;
          }
        </style>
      </head>
      <body class="bg-gray-200">
        <header class="w-full p-4 bg-white flex justify-center items-center shadow-md">
          <Image src="https://lh3.googleusercontent.com/fife/ALs6j_Hol2Y3jv1Ke2KdpmZd84PcC1p7MomzK8kY3sWTlATjpV3ycNEwbyFmrzPs1GnczLGlq3QiIg6rVvKfSp64HuXyjaKrhcYKd6o-yJpX3dTq31IdcqwWMyPWRr8UYbG7oNyHDm_Zyu1--y-bMI4iRw70yyKPimQ1Dssfmjr52FcGAEpg6izEBWJ-086jl9ALzDcfXDNiUBGf176VaM7NV-ODpimFu2yLS_ZmfSSAdmT15EU2nitPSODIIaMx2QXshLlcPD-VGYmcxtxDjQP_06tdH4sobt6OokznoCyea56ctCoy-BrWumgtQygJfpfVdaZE-KCTnGDOQL02GwgGhLBAoqaOMw8lI3WiRQOV8C1JCMbYceBXN9TAkb-AF97VJb2Qq0wWroJi94z6y_YHRf5--Gkue86kPvNNLuD3T6AGzPSWdcaFOk0m-oKzmrkC46wQaH26XT8VEISZF4dLCkvtqof6_tWC2OejNdNtB_T-JFizZByNKuVftTdJFmn-G57x09Ik6WqvXjQPQ26iccIKdoNhQ_3btiFSpEk4tG2WpcbrqviCX7htaJIHTsBXR4-tldbwyTKFNmuhyvDcCIfOwJ43Qq0BTpil7C4aUS-69JyZXUbvc9FCp4DKaC5765HXm4Zc4EF93dsWiL4oI7zsoh5ObeLT56NJR_DyXTgy8dDsCcscNST5-EBWGQbsXl69pKqcqjQM0MtPT4LcB6FzQo0Z4vqbzXo8s8GL8kp5w98ngnctpqRfpcRlkapfiYvmHnkiAJizv8VouplQQcTH6yXkr_VLiAIqD93PUW0e3Do4s-e6tgUTCM0vJLrVgzMgWoIp5atCf-eSpU11vg7GGVNM_xDpJFxdr6zf9JSqRUb_jB2T4JCQ0Yf4FloFkn0FuFIh_hAT_YCfiRr2_x1EYuM2rLc62M47FtHzXcMkJA7YMauj10HqEvf95hdQAMF1Y5ENBP-o6TP1M7D7wM-uAalE6J1sASq6ZUw=w1920-h863" alt="Burberry Logo" width={100} height={100} />
        </header>
        <section id="full-height-section">
          <div class="product-card bg-white rounded-lg overflow-hidden shadow-lg m-3">
            <div class="flex overflow-hidden">
              <div id="productImage" class="w-1/2 bg-cover"></div>
              <div class="w-1/2 p-4">
                <h1 class="text-gray-900 font-bold text-3xl mb-1">Short Check Collar Gabardine Trench Coat</h1>
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
          document.getElementById('productImage').style.backgroundImage = 'url(https://lh3.googleusercontent.com/fife/ALs6j_FoJ7RnTXAl97yP-ppUD2Fufweh1jQJsvbprSx-vV2z18_eEOsmgMYVo3ssqj0e3NaMDKW1oXPDBZPxmfIP6RkxhUVtvTMKKJXb4HJUJqOWFGm-u0iftFZSr7xphXdVRRqza0NCk1s4qiPNlwUCUSplr4QWXikTxaJGXiuql04DSdjHZ9NwEI759sMNhA-8C60H2gOokKlU3V4xyKkvgDJm5DUhl79xwi-n4KK32DLImfpvV4cESOdH-KJv_RsSedf_UlobXVQMkv-TIkqQOIVF4uYFAxdjCkboKXNVJvBXTUhS1xWOcCkaDyqak6xzRS2rbQja7x3pGNJS4VpZ_G96R_mlO2PyS9fHLHMUcdAJ_IAn6wVeIF8lcDw-3aQNPdlY5sYTAIJb34teKVzZWQ2d3nH3c2V5NESv5Gp8s3MXY5MUmrM-BAW3R_51tgiA8TusKmJkkz-__OWZWSSLAZKBMHiDfocOPkRi9BmFwNc3iprtqC95NXyg8aNyX_uUAS4v7Ywk9z_DTVc3owlAG7i4qbbJTD4-bnu5pwdOA0fT9nVU8LCW8mDv56P01158VUhL4Gc6VNzNN8Z-g-ZGReMBerUCdZIDM_qtm5PXb-6cMd1fk_X-bHyPQX3oOEuJUPg8ygjksJqWPRtIlaMCmfxznuSxDOofUalL3lYs55Ddohq2IjKSOcGfs6IRRZorHfgrjBVkG6zg9TK1d9EFgRFbqTLXrjXZ8RH8ANsTHfGcSp7UtEky4Xnf_kxYth7ZV8dCBemhELUctfg1Q06hel3SsfPl_KXEyTeMbM0ASrjFZgbEQP8exD_B79pvDJSd6YHsWt50Vj34YEqpRqD3RypXLgsFDhk-Le10i9XWCiQxxHs4rUtm1fxZ-BDFiK4r8zFGUpg4HLY7zUiT37NiYFUzFgawM0Cnzzqk3eqbStCuJOfwMD9_g5C5Np5G7-wgp-WiXbd6cAXx7wlgWEcJjDdsfYE5rnLxvqTMvRM=w1920-h863)';
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
          document.getElementById('blockchainID').textContent = '1s4f5F5x';
        </script>
      </body>
    </html>`;

  return <iframe style={{ width: "100%", height: "100vh", border: "none" }} srcDoc={srcDoc} />;
}

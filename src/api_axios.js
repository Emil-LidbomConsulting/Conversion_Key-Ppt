import axios from 'axios';



//const sandbox_url = 'https://api.sandbox.cloudconvert.com/v2'
//const sandbox_key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzc4YWI2Y2ExZWE4ZTBiNDBmZWQwYWI2YjNmZGYzNDczNTRmYTIzNjVmYjM4MTU4NDIwMDRmYTNlYWViYjcxMzA4M2E4ODQ5YWYzZmZkMjciLCJpYXQiOjE2NzkzMDE4MjkuMzg0OTgxLCJuYmYiOjE2NzkzMDE4MjkuMzg0OTgzLCJleHAiOjQ4MzQ5NzU0MjkuMzc2MTEsInN1YiI6IjYyNDM3ODMwIiwic2NvcGVzIjpbInVzZXIucmVhZCIsInVzZXIud3JpdGUiLCJ0YXNrLnJlYWQiLCJ0YXNrLndyaXRlIiwid2ViaG9vay53cml0ZSIsIndlYmhvb2sucmVhZCIsInByZXNldC5yZWFkIiwicHJlc2V0LndyaXRlIl19.QljNnglw7rLkFDQKnpUlB6fpiUAqBSoqmu01eXCEzEBKW6azKiR8RC4lc5fUNq5aA74eL7W84_9x0YK2bjJrXGf48YGFDenpra6UMgNQjBDBT36lA2cB5ePqF7XdG50J9qQ_olemylW0f7M6QoULGNiiQgpwN9sfOo8L5TFAiKQYiRT1Icjhnimd8VeJ7sMCo_jRidonJHgZFHFSrnUfDQH7716hFZNLRERblLg-vZtZEWUr9mmZJ4s89raAzA6GUl37shuAjO7aOusVB-PPvdTVS0c79MXMmZUjHrX2AOZIDKOYsV2UJXIjJIPdXxYOQMmUxHC7uvl-xuS2nx3ZhFcBpVRHlW-H2nusq8eNLV5TNUmzuFZpv-JxDfd55FIZP0eq22yRpwFjwGOgcFA5PE5mFja9IXELF2RMdTZ70FpNBGjhINSEbs5EBEMbINwaMxFGUWwu5lSXOCqHApiw1SliyujCPmOg_4zGOHrDZha86RRqemSxmkFlu5IcFtAC2n5Nwqf6xFo7gpktxFRqg6XK8m6X-XFV97otAXp1pmVidbAQG7JnNxD7p4Gou_5f2AH_rxgKl6Hi3ruk9Tj7z41kiAuJf9r7-3vd4Y1LP6ATDY8Xa9ITufQKtMyInYwvgk9ng6V68mC61ZWazhP2wFdNszJfzc8o9lM46RDrK7E"

const official_url = "https://api.cloudconvert.com/v2"
const official_key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2E3YTYzNjQwZjMyMDJhZDgxZTZiNThlNzE3MDYwMDBjNWRiZDkyMzdlNjA0OTY4MjNhZTY1YjZiNmU3NDllYTEzMGE5OWFhZTExNWNiNjQiLCJpYXQiOjE2Nzk1MDAxNjkuMTgyMTQyLCJuYmYiOjE2Nzk1MDAxNjkuMTgyMTQzLCJleHAiOjQ4MzUxNzM3NjkuMTc2NTczLCJzdWIiOiI2MjQzNzgzMCIsInNjb3BlcyI6WyJ0YXNrLndyaXRlIiwidGFzay5yZWFkIl19.I938aTnuBzxE09geZkWwTzkpKrx16jKy7B8XXZs8oQuTJy-8Ea4YQBTj83RZCUyQ6-wTrpAJdjapzTYgt3D0DhlZOFSUWy7LlisNfd8qe1W3hnv8hsiofWs5Tc0glqCnVimzXxFV8mzWdgev-PFAQ4v19G6F8EggH3LgibQMT0D7ZqwXLruU03ZY64u6STA-nMJ6dwlqsoyg9S2RPJd_9MPlY3fCTAIXwx4UJftKXjcAtbx7FNfFp7RZAoZ0J1r8bY311BlFLNmD-BqTa8TnYxNWeJudjorF5Rwu9t8P51pb2pXKYrnUdfbyKmgMSCCzkKLfX3yJL85svTiaj_N9S5A_qSmU1zh1jim55yg1bP927E7LktoYRMFOOp7J1TRu0kifBcvP9CBdW-O2EYndnXUXKDSD7Fueri-aGwdqeIuwVzoifpfzj7JJRtgSZMdF8sNzuiqh7f4JfOUkc0Ux-OfzzpfdjBYHtfKtOPbEYrzOPGPhPSGvfhlq_UY_fNth8Wg6xL_LMSWgo_7rrwXAKm9mrKLKmbzl1nmKE-EmkjKK6QB7nKEPSVIYgZLBYGTsiSYZZIR-bPrAlU7NmwUyIOhfGQn2_JW3VTX8gdGX5SiiLlAWDJEVZybwweMj3aFDFZ3QZaUHzLrMveXxgbPjBRUaMvvThctOC3541MWK8J8"

const baseUrl = official_url
const apiKey = official_key


export async function convertFile(file) {
  // Create the import task
  const formData = new FormData();
  formData.append('file', new Blob([file.buffer], { type: file.mimetype }), file.originalname);

  const importTask = await axios({
    method: 'POST',
    url: `${baseUrl}/import/upload`,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'multipart/form-data'
    },
    data: formData
  });
  console.log(importTask)
  // Create the conversion task
  const convertTask = await axios({
    method: 'POST',
    url: `${baseUrl}/convert`,
    headers: {
      Authorization: `Bearer ${apiKey}`
    },
    data: {
      operation: 'convert',
      input_format: 'key',
      output_format: 'pptx',
      engine: 'iwork',
      input: importTask.data.data.links.self,
      engine_version: '1.0'
    }
  });

  // Wait for the conversion to complete
  let exportTask = null;
  while (!exportTask) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await axios({
      method: 'GET',
      url: `${baseUrl}/tasks/${convertTask.data.data.id}`,
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    if (response.data.data.status === 'finished') {
      exportTask = response.data.data.result.filter(
        task => task.type === 'export/url'
      )[0];
    }
  }

  // Return the download URL
  return exportTask.url;
}

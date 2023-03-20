import axios from 'axios';



// const sandbox_url = 'https://api.sandbox.cloudconvert.com/v2'
// const sandbox_key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzc4YWI2Y2ExZWE4ZTBiNDBmZWQwYWI2YjNmZGYzNDczNTRmYTIzNjVmYjM4MTU4NDIwMDRmYTNlYWViYjcxMzA4M2E4ODQ5YWYzZmZkMjciLCJpYXQiOjE2NzkzMDE4MjkuMzg0OTgxLCJuYmYiOjE2NzkzMDE4MjkuMzg0OTgzLCJleHAiOjQ4MzQ5NzU0MjkuMzc2MTEsInN1YiI6IjYyNDM3ODMwIiwic2NvcGVzIjpbInVzZXIucmVhZCIsInVzZXIud3JpdGUiLCJ0YXNrLnJlYWQiLCJ0YXNrLndyaXRlIiwid2ViaG9vay53cml0ZSIsIndlYmhvb2sucmVhZCIsInByZXNldC5yZWFkIiwicHJlc2V0LndyaXRlIl19.QljNnglw7rLkFDQKnpUlB6fpiUAqBSoqmu01eXCEzEBKW6azKiR8RC4lc5fUNq5aA74eL7W84_9x0YK2bjJrXGf48YGFDenpra6UMgNQjBDBT36lA2cB5ePqF7XdG50J9qQ_olemylW0f7M6QoULGNiiQgpwN9sfOo8L5TFAiKQYiRT1Icjhnimd8VeJ7sMCo_jRidonJHgZFHFSrnUfDQH7716hFZNLRERblLg-vZtZEWUr9mmZJ4s89raAzA6GUl37shuAjO7aOusVB-PPvdTVS0c79MXMmZUjHrX2AOZIDKOYsV2UJXIjJIPdXxYOQMmUxHC7uvl-xuS2nx3ZhFcBpVRHlW-H2nusq8eNLV5TNUmzuFZpv-JxDfd55FIZP0eq22yRpwFjwGOgcFA5PE5mFja9IXELF2RMdTZ70FpNBGjhINSEbs5EBEMbINwaMxFGUWwu5lSXOCqHApiw1SliyujCPmOg_4zGOHrDZha86RRqemSxmkFlu5IcFtAC2n5Nwqf6xFo7gpktxFRqg6XK8m6X-XFV97otAXp1pmVidbAQG7JnNxD7p4Gou_5f2AH_rxgKl6Hi3ruk9Tj7z41kiAuJf9r7-3vd4Y1LP6ATDY8Xa9ITufQKtMyInYwvgk9ng6V68mC61ZWazhP2wFdNszJfzc8o9lM46RDrK7E"
const official_url = "https://api.cloudconvert.com/v2"
const official_key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYmU5Mjg3ZTM1MTVhYWE0MThmNTlmNWVjNGU3MDg3OTA5ZmRkZjY4Nzc5ZTUwY2YyMWY2MTZmZjg1Y2Y3NDAwNWVjZWQ1MTk3ZDZlOTQ4ZDkiLCJpYXQiOjE2Nzg4ODkxMjIuMzUxNjUsIm5iZiI6MTY3ODg4OTEyMi4zNTE2NTEsImV4cCI6NDgzNDU2MjcyMi4zMzk3NjQsInN1YiI6IjYyNDM3ODMwIiwic2NvcGVzIjpbInRhc2sud3JpdGUiLCJ0YXNrLnJlYWQiLCJ1c2VyLndyaXRlIiwidXNlci5yZWFkIiwid2ViaG9vay5yZWFkIiwid2ViaG9vay53cml0ZSIsInByZXNldC5yZWFkIiwicHJlc2V0LndyaXRlIl19.TDqFiHi1CNh9ZQMjz9SOXK8Qc0_vCzYUwTDXxX_MclGA-e9hbJmPyNjH6HYiuCBOFmP_CvfA03GMWqBLovB5kGfZJdBEx5juQwUvobuOt4JqbE6LV1oHXXA9CfkuVOatskT2y-xHy_x0UZ48FDbCdZqXOqtTzh_GOeq94jfIXu0cIKb7mpsK2e99xDbPOBuo_UE0eDzAu3P_2w6gyjjaWkavS5y7Vxlt1toIOcRXKgkwzAzIDCYT7zjDCP3tG5tgIBhzYPJeh3ZdGAPW2TJTJr7aMpJhF-fA0Ce0PhM_4y46maVjJl1efEXTXLmTe5C6Bm-vnKKCSfKSJzQH5GpTbM2FRtdbKA8lzPPR4ijXIsKqQd9fCtsYH_izKiCfuq8lHX5sAhxTdnDJZDMyK_r9A-myr8pt6OOmTxGTRJcMQ9HM4806Caocxv6FmYEbwQASN4xXYumndVO-q8OcpdZ6yrcHMHuQLDDfY8w-66xsNoy2qnFVP_Z1lo6x8UUXQhB86nvPtdWYPdSpUopwcBRMOhJSIjKvBy8uJCsZk-U5pm3EarN3Iu5tAb7Cg8lfElN-W575_8c5vLpo8i8pOvyPaL8j_-b-9ND0lK_Bjr1wQh4ZAU_HGsVH0lZApIKkBNJrQ9gQy5P56hCK8lldwt0d92Z2WV8sZLlK5zWJ01bp0EI"
const baseUrl = official_url 
const apiKey = official_key


export async function convertFile(file) {

  // Create the import task
  const importTask = await axios({
    method: 'POST',
    url: `${baseUrl}/import/upload`,
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    data: file.buffer,
    params: {
      filename: file.originalname,
    },
  });

  console.log(importTask)

  // Create the conversion task
  const convertTask = await axios({
    method: 'POST',
    url: `${baseUrl}/convert`,
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    data: {
      input: importTask,
      input_format: 'key',
      output_format: 'pptx',
      engine: 'iwork',
      file: importTask.data.data.id,
    },
  });

  // Wait for the conversion to complete
  let exportTask = null;
  while (!exportTask) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await axios({
      method: 'GET',
      url: `${baseUrl}/tasks/${convertTask.data.data.id}`,
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    if (response.data.data.status === 'finished') {
      exportTask = response.data.data.result.filter(task => task.type === 'export/url')[0];
    }
  }

  // Return the download URL
  return exportTask.url;
}

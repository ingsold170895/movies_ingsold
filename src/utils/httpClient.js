
const URL = "https://api.themoviedb.org/3/";

export function get(path) {
    return fetch(URL + path, {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTk1MDUxMDI1Zjc1NTc4YzAxNzlkOTYwZTFmOTA5ZSIsInN1YiI6IjY0OGM4NmQ4NTU5ZDIyMDBjNTc1YmVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dm14Y0UrAaDMbqr1ImDhO4z8pgIN-GmWCsJjOUEfyqE",
      },
    })
      .then((response) => response.json());
}
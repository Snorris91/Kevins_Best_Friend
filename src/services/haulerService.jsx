export const getAllHaulers = () => {
    return fetch("http://localhost:8000/haulers").then(res => res.json())
}

export const getHaulerById = (haulerId) => {
    return fetch(`http://localhost:8000/haulers/${haulerId}`).then(res => res.json())
}

export const editHauler = (hauler) => {
    return fetch(`http://localhost:8000/haulers/${hauler.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hauler),
      })
}
// .then((res) => res.json());
// export const editHauler = (hauler) => {
//     return fetch(`http://localhost:8000/haulers/${hauler.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(hauler),
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         // Handle the error appropriately
//       });
//   }

// export const editHauler = (hauler) => {
//     return fetch(`http://localhost:8000/haulers/${hauler.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(hauler),
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         try {
//           return res.json();
//         } catch (error) {
//           throw new Error("Failed to parse JSON response");
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         // Handle the error appropriately
//       });
//   }
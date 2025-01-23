// Fungsi untuk memeriksa apakah sebuah bilangan adalah bilangan prima
function isPrime(num) {
    if (num <= 1) return false; // 0 dan 1 bukan bilangan prima
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Jika habis dibagi angka lain, bukan bilangan prima
        }
    }
    return true;
}

// Menangkap form dari DOM
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form

    // Mendapatkan input dari pengguna
    const start = parseInt(document.querySelector("input[name='bill1']").value);
    const end = parseInt(document.querySelector("input[name='bill2']").value);

    // Hapus hasil sebelumnya
    let existingResult = document.querySelector("#result-container");
    if (existingResult) {
        existingResult.remove();
    }

    // Elemen untuk menampilkan hasil
    const resultContainer = document.createElement("div");
    resultContainer.id = "result-container";
    resultContainer.style.display = "flex";
    resultContainer.style.flexWrap = "wrap";
    resultContainer.style.marginTop = "20px";
    resultContainer.style.padding = "15px";
    resultContainer.style.borderRadius = "10px";
    resultContainer.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
    resultContainer.style.fontFamily = "Arial, sans-serif";
    resultContainer.style.textAlign = "center";
    resultContainer.style.maxWidth = "500px";
    resultContainer.style.marginLeft = "auto";
    resultContainer.style.marginRight = "auto";

    // Menambahkan elemen ke body
    document.body.appendChild(resultContainer);

    // Validasi input
    if (start === end) {
        resultContainer.style.backgroundColor = "#ffcccc";
        resultContainer.style.color = "#ff0000";
        resultContainer.innerHTML = "<p>Bilangan tidak boleh sama</p>";
    } else if (start > end) {
        resultContainer.style.backgroundColor = "#ffcccc";
        resultContainer.style.color = "#ff0000";
        resultContainer.innerHTML = "<p>Bilangan harus dari yang terkecil</p>";
    } else {
        // Looping untuk mencari bilangan prima
        let primeNumbers = [];
        for (let i = start; i <= end; i++) {
            if (isPrime(i)) {
                primeNumbers.push(i);
            }
        }

        // Menampilkan hasil
        if (primeNumbers.length > 0) {
            resultContainer.style.backgroundColor = "#e0ffe0";
            resultContainer.style.color = "#006400";
            resultContainer.innerHTML = `<p>Bilangan prima: ${primeNumbers.join(", ")}</p>`;
        } else {
            resultContainer.style.backgroundColor = "#ffcccc";
            resultContainer.style.color = "#ff0000";
            resultContainer.innerHTML = "<p>Tidak ada bilangan prima dalam rentang tersebut</p>";
        }
    }
});

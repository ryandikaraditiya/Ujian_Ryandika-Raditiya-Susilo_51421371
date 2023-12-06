// Retrieve data from local storage or use an empty array if no data is present
var data = JSON.parse(localStorage.getItem("data")) || [];

function tampil() {
    var tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>Nama</th><th>Action</th></tr>";
    for (let i = 0; i < data.length; i++) {
        var btnEdit = "<button class='btn-edit' onclick='edit(" + i + ")'>Edit</button>";
        var btnHapus = "<button class='btn-hapus' onclick='hapus(" + i + ")'>Hapus</button>";
        var row = "<tr><td>" + (i + 1) + "</td><td>" + data[i] + "</td><td>" + btnEdit + " " + btnHapus + "</td></tr>";
        tabel.innerHTML += row;
    }
}

function tambah() {
    var input = document.querySelector("input[name=Nama]");
    if (input.value.trim() !== "") {
        data.push(input.value.trim());
        tampil();
        input.value = "";

        // Update local storage with the latest data
        localStorage.setItem("data", JSON.stringify(data));
    }
}


function edit(id) {
    var baru = prompt("Edit", data[id]);
    if (baru !== null) {
        data[id] = baru;
        tampil();

        // Update local storage with the latest data
        localStorage.setItem("data", JSON.stringify(data));
    }
}

function hapus(id) {
    if (confirm("Apakah Anda yakin ingin menghapus?")) {
        data.splice(id, 1);
        tampil();

        // Update local storage with the latest data
        localStorage.setItem("data", JSON.stringify(data));
    }
}

// Initial display of data from local storage
tampil();

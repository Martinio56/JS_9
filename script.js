const tekst = document.getElementById("tekst");
const btn = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn.addEventListener("click", () => {
    const tallet = Number(tekst.value);

    if (tallet >= 0 && tallet <= 100) {
        const tilfeldigtall = Math.floor(Math.random() * 101);
        console.log(tilfeldigtall);
    
        if (tallet === tilfeldigtall) {
            document.getElementById("kommentar").innerHTML = 'Gratulerer! Du gjettet riktig';
            if (confirm("Gratulerer!\nDu gjettet riktig!\nSpill igjen?")) {
                location.reload();
            } else {
                window.close();
            }
        } else {
            document.getElementById("kommentar").innerHTML = `Beklager, du gjettet feil. Riktig tall var ${tilfeldigtall}.`;
        }
    } else {
        document.getElementById("kommentar").innerHTML = 'Tallet du skrev var ikke mellom 0 og 100.';
    }
});

btn2.addEventListener("click", () => {
    const tilfeldigtall = Math.floor(Math.random() * 101);

    tekst.value = tilfeldigtall;

    btn.dispatchEvent(new Event('click'));
});
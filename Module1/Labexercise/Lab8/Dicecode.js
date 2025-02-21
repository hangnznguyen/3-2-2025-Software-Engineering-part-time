<div>
        
        <button id="button1" onclick = "mydice1()">D6</button>
        <button id="button2" onclick = "mydice2()">D10</button>
</div>  

<div id="result"></div>

<script>
    // Function to roll a 6-sided dice
    function mydice1() {
        let result = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
        document.getElementById("result").innerHTML = "" + result;
    }

    // Function to roll a 10-sided dice
    function mydice2() {
        let result = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
        document.getElementById("result").innerHTML = " " + result;
    }

</script>

<script>
     <p id="demo"></p>
    
    function Dice6() {
      let x= Math.floor(Math.random() * 6) + 1;
      document.getElementById("demo").innerHTML = "result";
    }

    function Dice10() {
      let x= Math.floor(Math.random() * 10) + 1;
      document.getElementById("demo").innerHTML = "result";
    }
</script>
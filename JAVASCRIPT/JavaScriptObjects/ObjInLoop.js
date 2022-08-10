
        function fun(){
        let s=" ";
        const Biryani={
               name:"chicken biryani",
               price:"150rs",
               falvour:"double-masala",
        };
        for(let x in Biryani)
        {
          s+=Biryani[x]+" ";
          
        }
        console.log(s);
         }
        fun();

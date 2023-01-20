let result =() => {
    setTimeout(() => {
        console.log("Hii");
        setTimeout(() => {
            console.log("How are You?")
            setTimeout(() => {
                console.log("Dhanshree!.....");
            },1000);
        },1000);
    },1000);
}
result()
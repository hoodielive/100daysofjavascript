// lol

if (!Number.isNaN) { 
    Number.isNaN = function isNaN(num) {
        return (
            typeof num == "number" && window.isNaN(num) 
        }; 
    };
};  


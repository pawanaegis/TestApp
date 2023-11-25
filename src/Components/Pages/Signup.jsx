import React,{useState, useEffect} from "react";

const Signup =()=>{
    const [code, setCode] = useState(null);

    useEffect(() => {
      // Function to extract the code from the URL
      const extractCodeFromURL = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const authorizationCode = urlParams.get('code');
  
        // Check if the authorization code is present in the URL
        if (authorizationCode) {
          // Update the state with the authorization code
          setCode(authorizationCode);
  
          // Redirect the user to a different page if needed
          // For example, you can use react-router-dom for navigation
          // history.push('/dashboard');
        }
      };
  
      // Call the function to extract the code when the component mounts
      extractCodeFromURL();
      console.log(code,'code');
    }, [code]);
    const handleLogin = () => {
        // Redirect the user to the ClickUp authorization URL
        window.location.href = 'https://app.clickup.com/api?client_id=HORBZB4HIA1LWFDCJ1OQ7H29W4EMCEFF&redirect_uri=https://dainty-praline-75f6cc.netlify.app/';
      };
    return(
        <>
    <h1>Signup Page</h1>
    <p>This is the signup page</p>
    <input type="text" placeholder="Enter your name"/>
    <input type="text" placeholder="Enter your email"/>
    <input type="text" placeholder="Enter your password"/>
    <button onClick={handleLogin}>Signup</button>
    </>
    )
    
}

export default Signup;
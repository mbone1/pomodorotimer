export default function Age() {
  var today = new Date();
  var birthDate = new Date("1990-7-15");
    var rawAge = today - birthDate;
    let minutes = Math.floor(rawAge / 60)
    let hours = Math.floor(minutes / 60)
    let age = Math.floor(rawAge / (1000 * 60 * 60 * 24));
    let ageInHours = Math.floor((rawAge/ (1000 * 60 * 60)) % 24);
    var m = today.getMonth() - birthDate.getMonth();
    var l = today.getMinutes() - birthDate.getMinutes()
    var n = birthDate.getMinutes()
    console.log(n)
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
    }
    
    // days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    //     hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    //     minutes: Math.floor((difference / 1000 / 60) % 60),
    //     // seconds: Math.floor((difference / 1000) % 60),
    return (<>
        <p>{rawAge} seconds</p>
        <p>{minutes} minutes</p>
        <p>{hours} hours</p>
        
        <p>{age} days</p>
        <p>{ageInHours} Hours</p>
        
        
    
    </>)
}
;

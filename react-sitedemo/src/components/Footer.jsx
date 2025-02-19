export default function Footer(){
    const hour = new Date().getHours();
    const openHour = 8;
    const closedHour = 20;
    const isOpen = hour >= openHour && hour <= closedHour;
    console.log(isOpen)
    return(
      <footer>{
        isOpen ? (
          <p>Akşam {closedHour} saatine kadar sipariş verebilirsiniz.</p>
        ) : 
        (
          <p>Dükkan şuanda kapatlı lütfen açılış saatleri içerinde gelin {openHour} - {closedHour}</p>
        )
        }
      </footer>
    );
    
  }
import "./MainPage.css"

function MainPage() {
  return(
    <div className="circle">
       <section className="mountain">
           <section className="snow"></section>
           <section className="snow-jagged"></section>
           <section className="snow-jagged1"></section>
           <section className="snow-jagged2"></section>
       </section>

       <section className="mountain-left">
           <section className="snow-left"></section>
           <section className="snow-jagged-left"></section>
           <section className="snow-jagged1-left"></section>
       </section>

       <section className="mountain-right">
           <section className="snow-right"></section>
           <section className="snow-jagged-right"></section>
           <section className="snow-jagged1-right"></section>
       </section> 

       <section className="mountain-shadow">
           <section className="snow-shadow"></section>
           <section className="snow-shadow-jagged"></section>
       </section>  

       <section className="mountain-shadow-left">
           <section className="snow-shadow-left"></section>
           <section className="snow-shadow-jagged-left"></section>
       </section>

       <section className="mountain-shadow-right">
           <section className="snow-shadow-right"></section>
           <section className="snow-shadow-jagged-right"></section>
           <section className="snow-shadow-jagged-right1"></section>
       </section>  
    </div>
  ) 
} 

export default MainPage;
// import image1 from "../../assets/protfolio1.jpg";
import project1 from "../../assets/portfolio1.jpg";
import project2 from "../../assets/portfolio2.jpg";
import project3 from "../../assets/portfolio3.jpg";
import project4 from "../../assets/portfolio4.jpg";
import project5 from "../../assets/portfolio5.png";
import project6 from "../../assets/portfolio6.jpg";


import ProjectCss from "../Project/Project.css";

const Service=()=>
{
    return (
        <section id="Project">
            <h5>My Recent Work</h5>
            <h2>Project</h2>
            <section className="container project_container">
                <article className="project_item">
                    <div className="project_item_image">
                        <img src={project1} alt="" />
                    </div>
                    <h3>Title</h3>
                    <div className="project_item_cta">
                    <a href="https://github.com/AnshuPathak-88825?tab=repositories" className="btn" target="_blank">Github</a>
                    <a href="https://github.com/AnshuPathak-88825?tab=repositories" className="btn btn-primary" target="_blank">Live</a>
                    </div>
                   

                </article>
                <article className="project_item">
                    <div className="project_item_image">
                        <img src={project2} alt="" />
                    </div>
                    <h3>Title</h3>
                    <div className="project_item_cta">
                    <a href="https://github.com/AnshuPathak-88825?tab=repositories" className="btn" target="_blank">Github</a>
                    <a href="https://github.com/AnshuPathak-88825?tab=repositories" className="btn btn-primary" target="_blank">Live</a>
                    </div>
                   

                </article>
                <article className="project_item">
                    <div className="project_item_image">
                        <img src={project3} alt="" />
                    </div>
                    <h3>Title</h3>
                    <div className="project_item_cta">
                    <a href="https://github.com/AnshuPathak-88825?tab=repositories" className="btn" target="_blank">Github</a>
                    <a href="https://github.com/AnshuPathak-88825?tab=repositories" className="btn btn-primary" target="_blank">Live</a>
                    </div>
                   

                </article>
                <article className="project_item">
                    <div className="project_item_image">
                        <img src={project4} alt="" />
                    </div>
                    <h3>Title</h3>
                    <div className="project_item_cta">
                    <a href="https://github.com/AnshuPathak-88825?tab=repositories" className="btn" target="_blank">Github</a>
                    <a href="https://github.com/AnshuPathak-88825?tab=repositories" className="btn btn-primary" target="_blank">Live</a>
                    </div>
                   

                </article>
                <article className="project_item">
                    <div className="project_item_image">
                        <img src={project5} alt="" />
                    </div>
                    <h3>Title</h3>
                    <div className="project_item_cta">
                    <a href="https://github.com/AnshuPathak-88825?tab=repositories" className="btn" target="_blank">Github</a>
                    <a href="https://github.com/AnshuPathak-88825?tab=repositories" className="btn btn-primary" target="_blank">Live</a>
                    </div>
                   

                </article>
                <article className="project_item">
                    <div className="project_item_image">
                        <img src={project6} alt="" />
                    </div>
                    <h3>Title</h3>
                    <div className="project_item_cta">
                    <a href="https://github.com/AnshuPathak-88825?tab=repositories" className="btn" target="_blank">Github</a>
                    <a href="https://github.com/AnshuPathak-88825?tab=repositories" className="btn btn-primary" target="_blank">Live</a>
                    </div>
                   

                </article>
               
            </section>
        </section>

    )
}
export default Service;
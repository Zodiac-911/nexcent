import "../styles/content.css";
import "../styles/topbar.css";
import illuOne from "../assets/illu1.png";
import carossel from "../assets/crossel.png";
import people from "../assets/people.png";
import buldings from "../assets/buldings.png";
import hands from "../assets/hands.png";
import login from "../assets/login.png";
import click from "../assets/click.png";
import payment from "../assets/payment.png";
import peopleTwo from "../assets/people-2.png";
import loginTwo from "../assets/login-2.png";
import tesla from "../assets/tesla.png";

function Content() {
  return (
    <>
      <div className=" content">
        <div className="one divs" data-aos="fade-up">
          <div className="header-text">
            <div>
              <h1>Lessons and insight</h1>
              <h2>from 8 years</h2>
            </div>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="btn">Register</button>
          </div>
          <img src={illuOne} alt="" />
        </div>
        <div className="two divs" data-aos="fade-up">
          <h2>Our Clients</h2>
          <p>We have been working with some Fortune 500+ clients</p>
          <img className="carossel-two" src={carossel} alt="" />
          <h2>Manage your entire community in a single system</h2>
          <p>Who is Nextcent suitable for?</p>
          <div
            className="cards-holder"
            data-aos="fade-in"
            data-aos-delay="50"
            data-aos-duration="1500"
          >
            <div>
              <img src={people} alt="" />
              <h2>Membership Organisations</h2>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div>
              <img src={buldings} alt="" />
              <h2>National Associations</h2>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div>
              <img src={hands} alt="" />
              <h2>Clubs And Groups</h2>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
          <div className="login-holder">
            <img src={login} alt="" />
            <div>
              <h2>The unseen of spending three years at Pixelgrade</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                atque nostrum nisi culpa, repellat inventore voluptates
                excepturi, doloribus debitis laudantium sunt sint adipisci nobis
                dignissimos quo corporis doloremque, sed consectetur.
              </p>
              <button className="btn">Learn More</button>
            </div>
          </div>
        </div>
        <div className="three divs" data-aos="fade-up">
          <div className="text-three">
            <div>
              <h2>
                Helping a local <span>business reinvents itself</span>
              </h2>
            </div>
            <p>We reached here with our hard work and dedication</p>
          </div>
          <div className="statistics">
            <div>
              <img src={peopleTwo} alt="" />
              <h3>2,245,341</h3>
              <h4>Members</h4>
            </div>
            <div>
              <img src={click} alt="" />
              <h3>46,328</h3>
              <h4>Clubs</h4>
            </div>
            <div>
              <img src={click} alt="" />
              <h3>828,867</h3>
              <h4>Event Bookings</h4>
            </div>
            <div>
              <img src={payment} alt="" />
              <h3>1,926,436</h3>
              <h4>Payments</h4>
            </div>
          </div>
        </div>
        <div className="four divs" data-aos="fade-up">
          <div className="login-holder">
            <img src={loginTwo} alt="" />
            <div>
              <h2>The unseen of spending three years at Pixelgrade</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates libero, dolor rem obcaecati quae, rerum fugiat, a
                perferendis ipsum necessitatibus consectetur. Ipsa velit officia
                voluptatem id ullam libero aliquam eligendi.
              </p>
              <button className="btn">Learn More</button>
            </div>
          </div>
        </div>
        <div className="five divs" data-aos="fade-up">
          <img className="tesla" src={tesla} alt="" />
          <div className="text-five">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              quam. Sed, autem officia dolore velit saepe culpa explicabo! Animi
              rem minima explicabo corrupti ex dolor nesciunt fuga, sit saepe
              laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Praesentium numquam veniam quasi amet.
            </p>
            <h3>Tim Smith</h3>
            <p>British Dragon Boat Racing Association</p>
            <div>
              <button className="btn">
                Meet all customers <span> →</span>
              </button>
            </div>
          </div>
        </div>
        <div className="six divs" data-aos="fade-up">
          <h2>Caring is the new marketing</h2>
          <p>
            The Nextcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.
          </p>
          <div className="projects-holder">
            <div className="project">
              <div
                className="bnademwa7ed bnyadm"
                data-aos="fade-right"
                data-aos-duration="1500"
              ></div>

              <div className="txt-btn-six">
                <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                <button className="btn">
                  Readmore <span> →</span>
                </button>
              </div>
            </div>
            <div className="project">
              <div
                className="bnademzouj bnyadm"
                data-aos="fade-in"
                data-aos-duration="1500"
              ></div>
              <div className="txt-btn-six">
                <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                <button className="btn">
                  Readmore <span> →</span>
                </button>
              </div>
            </div>
            <div className="project ">
              <div
                className="bnademtlata bnyadm"
                data-aos="fade-left"
                data-aos-duration="1500"
              ></div>
              <div className="txt-btn-six">
                <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                <button className="btn">
                  Readmore <span> →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="seven divs" data-aos="fade-up">
          <h1>Pellentesque suscipit fringilla libero eu.</h1>
          <button className="btn">Get a Demo →</button>
        </div>
      </div>
    </>
  );
}
export default Content;

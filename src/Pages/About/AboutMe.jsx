



const AboutMe = () => {
    return (
        <div className="bg-white ">
            <div className="">
                <div className="flex justify-center py-14">
                <button className=" border-solid border-gray-700 px-4 py-2 border-2 text-xl font-extrabold flex justify-center">About Me</button>
                </div>
               <div className="lg:flex lg:flex-row flex-col ">
               <div className="space-y-2 lg:px-10 px-4 lg:w-1/2 w-full py-4">
              <p className="text-md font-medium text-gray-600"> 
                    I am an accomplished Front-End Developer, dedicated to crafting immersive and intuitive user interfaces. Proficient in HTML, CSS, and JavaScript, with a specialization in React, I excel in building dynamic, component-based applications that prioritize seamless user interactions.

                    My journey includes a commitment to deepen my skills in MongoDB for robust, scalable, and data-driven web applications. Concurrently, I bring a strong understanding of Firebase, particularly in user authentication, ensuring secure and seamless access for users.</p>

{/*                   
                <h2 className="text-lg font-bold text-gray-800">Technical Prowess:</h2>
                <p className="text-md font-medium text-gray-600">Mastery in HTML, CSS, and JavaScript forms my robust foundation, enabling the creation of visually captivating and responsive interfaces. This proficiency ensures seamless and engaging user experiences, leaving a lasting impression.

                    As a React specialist, I bring authority to the table, excelling in architecting and developing dynamic, component-based applications. My expertise extends to optimizing performance, delivering not just functional but exceptionally smooth and interactive web applications.</p> */}

                    {/* <h2 className="text-lg font-bold text-gray-800"> Database and Authentication Expertise:</h2>
                    <p className="text-md font-medium text-gray-600">I'm actively refining my MongoDB skills to contribute to robust, scalable, and data-driven web applications. Simultaneously, I bring a strong grasp of Firebase, specializing in user authentication. Leveraging Firebase's services, I ensure secure and seamless access, enhancing trust and reliability in web applications.</p>

                  <h2 className="text-lg font-bold text-gray-800">Collaborative Approach:</h2>

                 <p className="text-md font-medium text-gray-600">   Team Collaboration: I am a collaborative team player, working seamlessly with designers and stakeholders to align development efforts with design vision. Agile methodologies are ingrained in my workflow.</p>
              
                <h2 className="text-lg font-bold text-gray-800">  Adaptive Learning:</h2>
               <p className="text-md font-medium text-gray-600"> Tech Enthusiast: In addition to my front-end focus, I am actively learning MongoDB and leveraging Firebase for user authentication, enhancing my toolkit for creating dynamic and secure web applications.
                If you're looking for a Front-End Developer with a blend of expertise, ongoing learning, and practical experience in Firebase user authentication, I encourage you to explore my detailed resume. Let's connect to discuss how my evolving skills can contribute to your projects with precision and dedication to creating exceptional user experiences.</p> */}

                </div>
                <div className="space-y-3 text-left lg:w-1/2 w-full lg:px-0 px-4 lg:pl-28 py-4">
                    <h2 className="lg:text-3xl text-2xl lg:font-extrabold font-bold text-green-500">Personal Information</h2>
                    <h2 className="lg:text-xl text-lg font-bold">Name: <span className="text-lg font medium">Mahmodul Hasan Robin</span></h2>
                    <h2 className="lg:text-xl text-lg font-bold">Age: <span className="text-lg font medium">22 Years</span></h2>
                     <h2 className="lg:text-xl text-lg font-bold">Address: <span>Dhaka,Bangladesh</span></h2>
                     <h2 className="lg:text-xl text-lg font-bold">Email:<span>mahmudulhasan7314@gmail.com</span></h2>
                     <h2 className="lg:text-xl text-lg font-bold">Phone: <span>+8801789267314</span> </h2>
                </div>
               </div>
                
            </div>
        </div>
    );
};

export default AboutMe;
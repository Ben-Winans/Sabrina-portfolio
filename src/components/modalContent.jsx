import OS_img_2 from '../assets/OS_img_2.png'
import OS_img_3 from '../assets/OS_img_3.png'
import OS_img_4 from '../assets/OS_img_4.png'
import OS_img_5 from '../assets/OS_img_5.png'
import OS_img_6 from '../assets/OS_img_6.png'
import OS_img_7 from '../assets/OS_img_7.png'
import OS_img_8 from '../assets/OS_img_8.png'
import OS_img_9 from '../assets/OS_img_9.png'
import OS_img_10 from '../assets/OS_img_10.png'
import PP_img_2 from '../assets/PP_img_2.png'
import PP_img_3 from '../assets/PP_img_3.png'
import PP_img_4 from '../assets/PP_img_4.png'

const modalContent = {
    AV: [
        {
            type: 'subheading',
            text: 'Context'
        },
        {
            type: 'body',
            text: [
                "Pictured above is the trial-taking interface I designed for the Reed Laboratory to enable an ongoing study." 
                + " This application provides the lab a way to perform distanced and in person trials, collect data on trials,"
                + " retrieve trial data, and define future trials. Originally, the project team consisted of four members:"
                + " two technical developers including myself and two lab members as contact points but after unforeseen circumstances"
                + " I became the sole technical contributor."
                + " The base goals of this project were to enable at least one PhD study, (non-reconfigurable) and to enable data collections."
                + " These goals were exceeded by the end of the project."
            ]
        },
        {
            type: 'subheading',
            text: "Architecture & Technologies"
        },
        {
            type: 'body',
            text: [
                "I completed this project with a *SERN* stack (SQL, Express, React, Node.js) and designed using a *Model-View-Controller*"
                + " pattern. I built a *REST API* for communication between the server and client. I prototyped a custom button box using"
                + " C which communicated over *USB* to the Backend. The Backend then used *WebSocket* to deliver input to the Front End. "
            ]
        },
        {
            type: 'subheading',
            text: "Backend"
        },
        {
            type: 'body',
            text: [
                "The Backend for this project consisted of *Sequelize* models for Tap, Screen, Test, and Participant. The models are "
                + "defined in their own model folder, then *controllers* defined in their own folder provide *CRUD* (create, read,"
                + " update, delete) methods. Accompanying the controllers are tests written in *Jest* to assure accuracy of methods."
                +" The *API* then provides routes for accessing these functions in accordance with *REST* principals."
            ]
        },
        {
            type: 'subheading',
            text: "Front End"
        },
        {
            type: 'body',
            text: [
                "Notably, the Front End for this project contains *controllers*, *data*, *redux*, and *views*. Starting in *controllers*,"
                + " *axios* allows the application to make HTTP requests with *async/await* functions relating to each controller "
                + "function found on the Backend. The *Data* file is the key to making this project reconfigurable for future trials."
                +" It contains *GeneralData* and *TrialData*,  each being json arrays containing general information that each trial should"
                + " contain and information about available trials the program can run respectively. *Redux* defines the code for *actions* "
                + "and *reducers*. *Actions* define possible interactions within the application. Namely,  the *CRUD* operations used to "
                + "interact with the Backend models and *state-management* interactions for updating the Front End during runtime. The "
                + "*reducers* receive *actions*  and update the *application-wide* state.  Finally, views contains code used to generate all "
                + "visuals for this project. Within this file there are *screens* and *components*. *Screens* define pages within the application"
                + " that users can be routed to while *components* define smaller portions of code used to build *screens* and their functionality."
                + " Visual elements make use ot *Styled Components* to *improve code maintainability* for future contributors. "
            ]
        },
        {
            type: 'subheading',
            text: "Areas for improvment"
        },
        {
            type: 'body',
            text: [
                "Git  commit messages. As I completed this project I did my best to improve my Git habits by committing more frequently"
                + " and having meaningful messages attached; however, I worked on this project alone and never received feedback on "
                + "how well my pushes could be understood and still look to improve in this area. Furthermore, I struggled with the "
                + "Front End design aspect of this project. I received unstructured Figma design files with a rough idea of what a "
                + "proposed end goal would look like then I re-created those designs in code. In retrospect I would have been better "
                + "served to learn Figma, structure the design files, then port those into code with a plugin. Finally, I struggled with"
                + " knowing the right questions to ask clients to understand their needs fully. I learned I should rely on my better judgment "
                +"and ask fewer, more broadly scoped questions as to avoid getting lost in the weeds trying to discuss technicalities with "
                + "non-technical stakeholders. "
            ]
        },
    ],

    OS: [
        {
            type: 'subheading',
            text: "Editing the Linux O.S."
        },
        {
            type: 'body',
            text: [
                "The exercise pictured above helped me learn how to navigate/understand the Linux O.S.. To add my name I had to search the O.S."
                + " using *grep* and *cli* traversal until I found the *boot loader* section where I could edit the starting screen. ",
                "For another assignment (pictured below) I edited the Linux O.S. by adding a *kernel-wide* message variable. This required me "
                + "to create and add new *system calls* to the O.S.. Through this, I learned about the *task scheduler* of the O.S. and how *system calls* function. "
            ]
        },
        {
            type: 'image',
            src: OS_img_2
        },
        {
            type: 'subheading',
            text: 'Library Crafting'
        },
        {
            type: 'image',
            src: OS_img_3
        },
        {
            type: 'body',
            text: [
                "For this portion of the class I learned how to create, share, and link *libraries*. I later expanded"
                + " on this skill in my Computer Engineering Senior Design course where I created libraries for "
                +"*interfacing* with *microprocessors* in C."
            ]
        },
        {
            type: 'subheading',
            text: 'Making a Memory Manager'
        },
        {
            type: 'body',
            text: [
                "Creating a Memory Manager involved practicing *Dynamic Memory Management* as well as *layering* to "
                + "avoid giving API processes too much responsibility. To complete this project, I used a *linked-list"
                + " data structure*, *POSIX API*, and *valgrind* to test my programs for *memory leaks*. The Memory Manager "
                + "could act on *worst fit* and *best fit* algorithms I designed. This experience taught me how to *separate"
                + " responsibilities* within a program to *limit privileges*. Doing this for each aspect of a program improves"
                + " *code clarity* and *security*. "
            ]
        },
        {
            type: 'subheading',
            text: "Unit Tests"
        },
        {
            type: 'image',
            src: OS_img_4
        },
        {
            type: 'body',
            text: [
                "Shown above is the result of learning the basics of *Google unit Tests* aka the *gtest* library for C++. "
                + "I received an incomplete file which created the outline for testing a flight booking system. We "
                + "needed to create a flight booking system described by unit tests like in *test driven development* "
                + "environments. Then, we needed to generate further unit tests to cover additional cases. Finally, we"
                + " made our own, simpler, unit tests to quickly test the accuracy of a library without checking the code directly. "
            ]
        },
        {
            type: 'subheading',
            text: "Threading"
        },
        {
            type: 'image',
            src: OS_img_5
        },
        {
            type: 'body',
            text: [
                "I also learned the basics of *threading*. While this experiment was simple, it’s the basis for understanding"
                + " how *threading improves process speed through concurrency at the cost of synchronization*. Threading can "
                + "add complexity to your program and even slow it down if your threads do not efficiently solve *process "
                + "intensive/math heavy* operations and pass back the results at a rate that matches the main process thread’s"
                + " timing. In *JavaScript* we accomplish the same with *async/await* functions and can create workers to engage "
                + "in intensive operations *without blocking our UI*. "
            ]
        },
        {
            type: 'subheading',
            text: "Pipelining"
        },
        {
            type: 'image',
            src: [OS_img_6, OS_img_7, OS_img_8]
        },
        {
            type: 'body',
            text: [
                "In this collection of works I learned about *Pipelining*, an invaluable method for *inter-process communication*."
                + " I practiced three versions of pipelining featured above. One instance of *Basic Pipes*, *Named Pipes* (*First"
                + " in First Out*) and *Pipe System calls* using *fork*. Using pipelining is another method for increasing "
                + "*concurrency* and *parallelism* in programs by allowing different stages of a pipeline to function as "
                + "*independent processes* all adding into one greater program. This in turn improves code *modularity* and "
                + "helps *separate concerns* within code as you can develop and debug each portion of the pipeline separately. "
            ]
        },
        {
            type: 'subheading',
            text: "C++ wall server"
        },
        {
            type: 'image',
            src: [OS_img_9, OS_img_10]
        },
        {
            type: 'body',
            text: [
                "This exercise taught me the basics of *TCP socket programming*. It also served as practice in *data validation*,"
                + " *network protocols*, and *server architecture*. Moreover, I learned *Client Simulation* with the use of *Netcat*."
                + " These tools are crucial for *Network Debugging*, *testing server responsiveness*  and *functionality*. These"
                + " tools expand my ability to rapidly *prototype* as a Full stack engineer. "
            ]
        },
        {
            type: 'subheading',
            text: "Daemon crafting"
        },
        {
            type: 'body',
            text: [
                "In a unique and challenging project, I developed a *daemon* (a type of program that runs in the background)"
                + " using the *FUSE API* to create a *user-space filesystem* based on the WAD file format (file format used in "
                + "O.G. DOOM). This project required an in-depth understanding of *filesystems*, *binary data manipulation*, and"
                + " the *FUSE API*. I implemented filesystem functions such as *reading file attributes* or *managing file* and "
                + "*directory operations*. The project also involved *parsing binary data* in the WAD format, *handling endianess*,"
                + " and creating an in-memory representation of the file system structure. This exercise honed my skills in"
                + " *systems programming*, *binary data handling*, and creative problem-solving, demonstrating my ability to work "
                + "with complex APIs."
            ]
        }
    ],

    PP: [
        {
            type: 'subheading',
            text: "Crafting a personal website"
        },
        {
            type: 'body',
            text: [
                "I began this project by researching a range of portfolio sites from juniors and senior developers. I took note of some features I liked, such as "
                + "*Rough Annotations*, a lightweight Javascript library for emphasizing text. I decided a *minimalist "
                + "design* would fit my needs best, as it would require *less programming* for a higher impact. The fallback of "
                + "some minimalist designs is that they can lack a personal touch that I hoped to weave into my own site. Other "
                + "portfolios could feel cookie cutter and left me with no impression of the designer behind the site. I addressed this"
                + " by taking a risk in my own work. I chose the happiest photo I could find of myself and built the site around it."
                + " This entailed getting a preliminary setup in place of all elements the final site would have, then selecting a base"
                + " color from my skin-tone and matching it to a fitting color pallet. I did my first draft of the site in *Figma* with"
                + " no code. After feeling satisfied with my work, I moved on to programming a *React* application making use of *vite*"
                + " and its *Hot Module Replacement* to see my code updates in real time. "
            ]
        },
        {
            type: 'image',
            src: PP_img_2
        },
        {
            type: 'subheading',
            text: "Working in Figma"
        },
        {
            type: 'body',
            text: [
                "Coming into this project with *a years worth of experience* working in *Figma,* I understood where future pains could"
                + " come in from an unorganized Figma file. To stay organized, I practiced the best methods from the start. This looked "
                + "like creating elements from the smallest portion up. Everything that could be a *component* was made into one. In "
                + "effect, tweaking design elements became much easier as each section could be *assembled individually,* then placed "
                + "together. Then, as the design grew closer to fruition and flaws could be seen, instead of editing each instance of a "
                + "class I would *edit the individual component* and let changes *propagate* through the Figma file. This made work more "
                + "*reliable* and *neater*. Finally, I pushed myself to create a *working prototype* delving deeper into Figma’s interactions."
                + " This allowed me to see a *working implementation* of my *imagined project* prior to investing any time in code. Given it "
                + "took roughly *3 weeks* to program this website, *prototyping* was a crucial step in determining the validity of my stylistic"
                + " choices *prior to committing the resources to actualize the project*. "
            ]
        },
        {
            type: 'subheading',
            text: "Programming the Site"
        },
        {
            type: 'image',
            src: PP_img_3
        },
        {
            type: 'body',
            text: [
                "This project served as an excellent practice in *React*, *HTML*, *CSS*, *Javascript*, *Git*,  *Chrome Dev tools* and "
                + "*adapting designs from Figma*.  While programming the site I practiced implementing *DRY* (Don’t repeat yourself) "
                + "principal and *React best practices*. In this project that meant creating *generalized  components* which receive "
                + "content objects then spool the data out into appropriate html with stylings. That is to say the *code writes more code*"
                + " instead of the *developer explicitly writing each visual object*. This made for *shorter files*, *cleaner code* and a "
                + "*simpler codebase*. Now when I or other developers want to repurpose pieces of code from this project, it will be more "
                + "*quickly understood* and *adaptable to new scenarios*."
            ]
        },
        {
            type: 'image',
            src: PP_img_4
        },
        {
            type: 'body',
            text: [
                "I greatly improved my understanding and usage of *Dev tools* during my work as I needed to adapt my design to *mobile"
                + " friendly layouts* with *media queries*. After focusing on making code generating functions I found greater complexity"
                + " in diagnosing issues with my css. Using chrome dev tools no only was I able to simulate a range of formats from different"
                + " mobile phones to tablets but I was also able to *analyze individual divs* with the hover of a mouse. This greatly improved"
                + " my speed in adapting designs and improved my accuracy whether it be addressing margins, padding or font changes. "
            ]
        }
    ],
};

export default modalContent;
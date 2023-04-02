# Tomo
## Your friend and personal guide empowering you on your journey towards self-growth and accountability to unlock your full potential!


## Inspiration
After being hospitalized for two weeks due to mental illness, one of our teammates had trouble keeping up with her outpatient treatment on her own. She struggled with staying away from substances, taking her prescribed medication, and maintaining her self-care. She also started noticing differences in her mood, energy levels, and social battery among others. She so badly wanted to feel better and heal both physically and mentally, but she couldn't hold herself accountable to the habits she wanted to form that she knew would make her feel better. 

Moreover, Tomo (とも) means friend in Japanese ~~and is the name of one of this anime simulcast season's best girls~~ so it really resonated with this teammate that she was basically making her own friend to help her get healthier and happier.

## What it does
- Tomo is an accountability buddy
: We programmed NFC tags to allow the user to turn off focused reminders or alarms that promote healthy and consistent habits. For example, one may want to brush their teeth every morning or drink water more often. In the first case, they could place an NFC tag on the bathroom mirror, and only when the user scans that specific bathroom tag does the toothbrush alarm go off. Similarly, an NFC tag on the kitchen fridge would turn off the reminder to drink water at least every 3 hours. This would force the user to get out of bed or away from their desk in order to accomplish that goal. There are things we have to do even when we don't have the intrinsic motivation to do them. Tomo would hold the user accountable to those important tasks and habits with this extra layer of action. 

- Tomo never forgets
: Users can track habits, tasks, and any number of factors throughout their day. We emphasized a gamified and intuitive user experience where they can easily log their moods, energy levels, symptoms, or medications with nothing more than a label (eg, what mood is felt based on a psychological emotion wheel) and a metric (eg, on a scale of 1-10 based on the intensity of emotion felt). The timestamp is automatically recorded with each entry which means...

- Tomo sees patterns where you might not
: Given enough data to analyze (given a few days of user entry or future integrations to calendars or time trackers), the user is able to analyze different factors or metrics or labels over time or against different factors to find connections. For example, one might be surprised to see that their social battery is affected by their water intake. Or something more expected would be a correlation between energy level and mood. Our analytics would show how each factor today may affect how X days before or Y days after may play out. Tomo empowers you to be better informed of the patterns that your own body is telling you.

- Tomo helps you decide what's best for you
: While there is full customizability in what kind of factors the user can track, it can be overwhelming to have that many choices presented at you all at once, so we created _quests_, which can be seen as pre-packaged factors depending on what goal the user wants to accomplish. For example, an academic quest would suggest tracking class deadlines and study habits. A user who is diabetic or has celiac disease or an eating disorder may want to opt into a nutrition quest that tracks their calorie intake and remind them to drink water more frequently. These are suggested to the user based on their previous activity, but the user can also make their own group of trackers and tags based on a common goal, like improved self-care and less burnout long-term.

- Tomo is kind to you, even when you aren't
: While both corporate America and the Gen-Z hustle culture may force more and more people to wear being "busy" ~~and overwhelmed and/or unhappy~~ as a badge of honor, we hope that Tomo instills a more balanced growth in the user. One that focuses just as much on maintaining physical and mental health as much as career success or financial gain. One that supports the individual in improving their self-confidence and discipline so they can reach both "productive" and happy goals. We don't want our users overwhelmed ~~like we were in making this project~~ but instead, we want them to feel like they can independently accomplish anything they set their minds to and equip them with the data and systems that work for them.

## How we built it
We initially tried making the app in React Native using Typescript but faced many challenges there, so we pivoted to creating a responsive browser-based web app using **React.js** which may not be as technologically complex, but it allowed us to focus our time on building instead of attempting to climb too steep a learning curve in too short a weekend. We also used **Firebase Firestore**, **Authentication**, and **Hosting**. We used a 3rd party iOS app to program our **NFC tags** with commands and interactions.

## Challenges we ran into
Our idea generator dreamed too big. She got carried away with her passion for the project and planned out so many functionalities and interfaces that it became more than what was feasible in the span of HackPrinceton. The rest of the team were also first-time hackers and were more used to low-level languages like C++ compared to languages like Javascript or Python which are more commonly used in hackathon projects. We had to pivot a few times, got overwhelmed then disappointed a few times, and got stuck debugging more than a few times. 

## Accomplishments that we're proud of
Isabel is proud to bring a strong product idea forward and create a prototype for what could be a commercially viable and socially impactful company. The boys are each proud of their progress in learning most of the tech stack this weekend, and we are proud of the effort we put in to this project.

## What we learned
Isabel learned Typescript for the first time, after many hackathons of avoiding it. She also hasn't coded in very long, so this was a great opportunity for her to refresh her programming knowledge. 
The boys were unfamiliar with working in teams and collaborating with GitHub, so they learned how to 
Everyone learned a lot about setting up their environments and how to adapt to challenges and think on their feet. 

## What's next for Tomo
Isabel brought this idea to HackPrinceton partly because she really needed this kind of app in her personal life and wanted her teammates to help her create it for her personal use, but also because she believes in the potential of Tomo becoming something that helps others as well. If this project is well-received, she hopes to scale the project to a bigger operation and perhaps become a startup. ~~Might as well take advantage of YC's invitation with this idea right?~~ 

We would like to allow for much more customizability in what they want to pursue in life and what makes them happy. We would also allow for some more flexibility in how strict the NFC tags are in turning off the alarms and reminders, eg a soft mode that doesn't make you lose XP if you break your streaks vs a hard mode that strictly forces the alarm to persist or locks you out of your device etc.

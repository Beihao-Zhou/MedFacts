# MedFacts
A full-stack blog app that connects doctors with the public to share medical knowledge and make online consultation more accessible

## Inspiration

Is it safe to see a doctor during pandemic? It is possible if everyone gets tested for coronavirus. But how long do patients have to wait for this kind of appointment? Personally, I sat in the waiting room for almost 6 hours. 

Apparently, going to hospital at the particular time for ailments is time consuming; meanwhile, medical resources are also not efficiently allocated. So, how can we support patients in time while not wasting resources? I hope that there is a platform that can connect professional doctors and the public. Medical practitioners may share tips and suggestions on how to maintain health, as well as clarify common health concerns among the public. Besides, people may also have the opportunity to have a private chat with them. Overall, this platform aims to allocate medical resources more efficiently.

## What it does
MedFacts is a full stack web application that provides the public with opportunities to deal with their health concerns. In the platform, doctors may post articles and blogs that clarify people’s health doubts. For example, Omicron has scared many people recently, and therefore, posts that share the latest knowledge of what Omicron is and how we can protect ourselves better would be so valuable. 

The most authoritative medical information is always posted here; therefore, people can just search information by titles and tags, and follow the instructions without any worries, since all doctors registered in the platform would be certified. Besides, people can raise their questions under the comment section, while other doctors can provide additional information as comments as well. 

However, sometimes people may have private questions regarding their personal health conditions. In this case, public comment would not work for them. Considering this situation, MedFacts also supports private chat functionality. People can communicate with professional doctors directly through private messages and have a real-time chat. 

## How I built it
Many technologies are applied for the full stack web app. The frontend of the app is developed using React and Redux, along with Material UI to improve the user interface. Besides, the server is handled using Express and Node.js, and RESTful API is implemented to communicate with MongoDB as well. To securely authenticate and authorize users, JWT is used for manual login in and sign up, whereas Google OAuth is also available. 

## Challenges I ran into
- This is the first time for me to build an end-to-end project rather than focusing on either frontend or backend as before; therefore, time limitation imposes great stress on me.
- When fetching private messages through Redux, the process is slow and unstable, and the chat window keeps flickering; after trials and errors, I found that purely using useEffect to fetch the data would be the most feasible way.
- Socket.io is utilized for real-time chat functionality but it doesn’t work when I integrate the authentication middleware. Eventually, the messages are fetched and stored using MongoDB. 

## Accomplishments that I've proud of
- Successfully completed the end-to-end full-stack web app independently
- Managed to create a platform that can deal with the real-world problem

## What I learned
- Use Redux to centralize the application's state and logic, enabling powerful capabilities like undo/redo, state persistence, and much more.
- Design RESTful API and schema, bridging the gap between frontend and backend
- Use JWT to securely authenticate each registered user, keeping the community a safe and inclusive place

## What's next for MedFacts
- Socket.io should still be used, which allows users to receive quicker responses; the number of times that they send requests to the server for data fetching can also be reduced. 
- Content Management System might be a good idea to administrate the platform, which ensures that all posts share reliable information to the public.
- Another idea is using API to fetch medical news from various media, keeping the public updated with information regarding health.


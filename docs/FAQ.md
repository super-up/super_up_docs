---
sidebar_position: 4
---

# Community FAQ

### How Users Register

- Users can register only by their `Email` and `password`
- Data collected from user while register is `Device Data` User location from his ip
- `Email` `Password` `Name` is required while user registers `bio`,`image` is Optional
- Users can Reset their password by sending Email OTP

### New features

- I have built this app to be suitable for most of all users as I can
- So sure there are some features you will need it for your business this you can [contact me](./support.md) to
- See more details about your custom features

### Phone Login

- As this is whatsapp clone but i use the Email and password for login because
- I see this will be `suitable` for all users since I dont need to depends on firebase for `Auth`!

### Window,web notifications

- There is no Flutter package until now support native notifications in the web,window
- So i use in app notifications for web and windows I will improve it in the next release (add sound)
![web_notifiactions](./img/web_notifiactions.png)

### Why not to use webRTC for calls
- I have already tried to add webRTC and already works, but I found the following
- it needs a very expensive VPS server and needs to make it scalable and distribute it as CDN for each country
- To get the most good video and voice quality, and it needs a lot of configurations since there 
- Are pre-configured service like agora.io with a good price, and it has 1K minutes free for each month 
- And it is more stable and scalable with a high quality, So I switch to it!
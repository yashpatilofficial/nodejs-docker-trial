# Why what how DOCKER
- Portabilty and plug and play behaviour
- Image is the building block
- The runtime env where the image is exec is a Container [Named after Solaris Container]
- Uses kernel and NOT virtualisation like VMs
- 


# Persisting the db
- Used postgres as the db and node as the backend language
- used pool as the db driver
- used VOLUMES param in the db service of the docker compose.yaml file
- wrote the mounting path for the db files to be stored at a local file storage as well as the docker env file storage
- local file storage need proper user access to r/w the files
- mounting path desc:
    - user/documents/dockerData/data:/var/lib/postgresql/data
        ##### USER_PATH:PATH_OF_FILES_TO_STORE

## Running detached containers is a perfect fit for programs that sit quietly in the background. That type of program is called a daemon

# Issues:

# Docker Daemon Mac
### Docker Daemon is not as easy as linux to be hosted, better use docker desktop
[Suggestive doc](https://apple.stackexchange.com/questions/373888/how-do-i-start-the-docker-daemon-on-macos)

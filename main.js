class GitHub {
    async getUserDetails(username) {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();
        this.createUserCard(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  
    createUserCard(user) {
      const main = document.getElementById('main');
      main.innerHTML = '';
  
      const card = document.createElement('div');
      card.classList.add('card');
  
      const avatar = document.createElement('img');
      avatar.src = user.avatar_url;
      avatar.alt = 'Avatar';
  
      const name = document.createElement('h2');
      name.textContent = user.name;
  
      const bio = document.createElement('p');
      bio.textContent = user.bio || 'No bio available.';
  
      const followers = document.createElement('p');
      followers.textContent = `Followers: ${user.followers}`;
  
      const following = document.createElement('p');
      following.textContent = `Following: ${user.following}`;
  
      const repos = document.createElement('p');
      repos.textContent = `Public Repositories: ${user.public_repos}`;
  
      const twitter = document.createElement('p');
      twitter.textContent = user.twitter_username ? `Twitter: @${user.twitter_username}` : '';
  
      const location = document.createElement('p');
      location.textContent = user.location ? `Location: ${user.location}` : '';
  
      card.appendChild(avatar);
      card.appendChild(name);
      card.appendChild(bio);
      card.appendChild(followers);
      card.appendChild(following);
      card.appendChild(repos);
      card.appendChild(twitter);
      card.appendChild(location);
  
      main.appendChild(card);
    }
  }
  
  // Initialize with your GitHub username
  const initialUsername = 'sayan0708';
  const github = new GitHub();
  github.getUserDetails(initialUsername);
  
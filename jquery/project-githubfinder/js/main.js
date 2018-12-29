$(document).ready(function () {
    console.log('STATE: ready')
    $('#input-username').keyup(function (e) {
        let username = e.target.value;

        //AJAX request
        $.ajax({//ambil username
            url: "https://api.github.com/users/" + username,
            data: {
                client_id: '630136aff480a8490c2a',
                client_secret: '77a38df3cef30fc534821e105e0469c7912f6608'
            },
            success: function (response) {
                console.log(response);
                $.ajax({//ambil repo dari username tsb
                    url: "https://api.github.com/users/" +username+"/repos",
                    data:  {
                        client_id: '630136aff480a8490c2a',
                        client_secret: '77a38df3cef30fc534821e105e0469c7912f6608',
                        sort: 'created: asc'
                    },
                    success: function (repos) {
                        console.log(repos);
                        $.each(repos, function (indexInArray, valueOfElement) { 
                             $('.user-repo').append(`
                             <li class='user-repo-list'>
                             <h3>${valueOfElement.name}</h3>
                             <label class='user-repo-label'>watchers: ${valueOfElement.watchers_count} </label>
                             <label class='user-repo-label'>forks: ${valueOfElement.forks_count} </label>
                             <label class='user-repo-label'>stars: ${valueOfElement.stargazers_count} </label>
                             <p>${valueOfElement.description}</p>
                             <a href='${valueOfElement.html_url}' target='_blank' class='user-repo-link'>Visit
                                 Repo</a>
                             `);
                        });
                        
                        $('ul.user-repo li:even').css('background-color','white');
                        $('ul.user-repo li:odd').css('border','white solid 1px');
                    }
                });

                $('#profile').html(`
                  
                <div class='panel'>
                <div class='panel-header'>
                    <img class='user-pic' src='${response.avatar_url}'></img>
                    <section id="panel-header-right">
                        <h3 id='user-name'>${response.login}</h3>
                        <div class='user-stat'>
                        <ul class='user-ul'>
                            <li class='user-li'>repos: +${response.public_repos}</li>
                            <li class='user-li'>gists: +${response.public_gists}</li>
                            <li class='user-li'>followers: +${response.followers}</li>
                            <li class='user-li'>following: +${response.following}</li>
                        </ul>
                    </div>
                        <a id='user-view' target='_blank' href='${response.html_url}'>View on GitHub</a>
                    </section>
                  
                </div>
                <div class='panel-body'>
                    <h3>${response.login}'s Repositories:</h3>
                    <ul class='user-repo'>
                      
                        </li>
                    </ul>
                </div>
            </div>
                `);
            }
        });
    });
})



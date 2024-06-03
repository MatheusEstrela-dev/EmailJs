// document.getElementById('newsletter-form').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const email = document.getElementById('email').value;

//     // Validação simples de email
//     if (!validateEmail(email)) {
//         alert('Por favor, insira um e-mail válido.');
//         return;
//     }

//     // Enviar o e-mail para o GetResponse
//     subscribeToNewsletter(email);
// });

// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
// }

// function subscribeToNewsletter(email) {
//     const apiKey = 'u5q76cm82ug0q79s0m4njhue7gnco23f';
//     const campaignId = 'Eletron';
//     const url = 'https://app.getresponse.com/automation_creator.html?workflowid=B4iuB';

//     const data = {
//         email: email,
//         campaign: {
//             campaignId: campaignId
//         }
//     };

//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${apiKey}`,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Erro ao se inscrever.');
//         }
//         return response.json();
//     })
//     .then(data => {
//         if (data.email === email) {
//             alert('Inscrição realizada com sucesso! Verifique seu e-mail.');
//         } else {
//             alert('Houve um erro ao se inscrever. Por favor, tente novamente.');
//         }
//     })
//     .catch(error => {
//         console.error('Erro:', error);
//         alert('Houve um erro ao se inscrever. Por favor, tente novamente.');
//     });
// }




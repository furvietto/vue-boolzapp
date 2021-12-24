// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

const project = new Vue({
    el:"#app",
    data:{
        counter: 0,
        addSend: "",
        filter: "",
        contacts: [
            {
              name: "Michele",
              avatar: "_1",
              visible: true,
              messages: [
                {
                  date: "10/01/2020 15:30:55",
                  text: "Hai portato a spasso il cane?",
                  status: "sent",
                  condition: false,
                },
                {
                  date: "10/01/2020 15:50:00",
                  text: "Ricordati di dargli da mangiare",
                  status: "sent",
                  condition: false,
                },
                {
                  date: "10/01/2020 16:15:22",
                  text: "Tutto fatto!",
                  status: "received",
                  condition: false,
                },
              ],
            },
            {
              name: "Fabio",
              avatar: "_2",
              visible: true,
              messages: [
                {
                  date: "20/03/2020 16:30:00",
                  text: "Ciao come stai?",
                  status: "sent",
                  condition: false,
                },
                {
                  date: "20/03/2020 16:30:55",
                  text: "Bene grazie! Stasera ci vediamo?",
                  status: "received",
                  condition: false,
                },
                {
                  date: "20/03/2020 16:35:00",
                  text: "Mi piacerebbe ma devo andare a fare la spesa.",
                  status: "sent",
                  condition: false,
                },
              ],
            },
          
            {
              name: "Samuele",
              avatar: "_3",
              visible: true,
              messages: [
                {
                  date: "28/03/2020 10:10:40",
                  text: "La Marianna va in campagna",
                  status: "received",
                  condition: false,
                },
                {
                  date: "28/03/2020 10:20:10",
                  text: "Sicuro di non aver sbagliato chat?",
                  status: "sent",
                  condition: false,
                },
                {
                  date: "28/03/2020 16:15:22",
                  text: "Ah scusa!",
                  status: "received",
                  condition: false,
                },
              ],
            },
            {
              name: "Luisa",
              avatar: "_4",
              visible: true,
              messages: [
                {
                  date: "10/01/2020 15:30:55",
                  text: "Lo sai che ha aperto una nuova pizzeria?",
                  status: "sent",
                  condition: false,
                },
                {
                  date: "10/01/2020 15:50:00",
                  text: "Si, ma preferirei andare al cinema",
                  status: "received",
                  condition: false,
                },
                
              ],
            },
          ],
    },
    methods: {
      change: function (index) {
         this.counter = index
      },

      lastAccess: function (messages) {
       let access= messages.filter((message) => {
         return message.status == 'received'
       })
       let lunghezza = access.length - 1;
       return access[lunghezza];
      },

      send: function () {
        dayjs.extend(window.dayjs_plugin_customParseFormat);
        let data = dayjs().format("D/M/YYYY HH:mm:ss");

        if (this.addSend != '') {
          this.contacts[this.counter].messages.push({
            date: data,
            text: this.addSend,
            status: "sent",
            condition: false,
          })
          this.addSend = "";

          setTimeout(() => {
            this.contacts[this.counter].messages.push({
              date: data,
              text: "ok",
              status: "received",
              condition: false,
            })
          }, 2000);
        }
      },

      searchFilter: function () {
        this.contacts.forEach(element => {
          if (element.name.toLowerCase().includes(this.filter.toLowerCase())) {
            element.visible = true
          } else {
            element.visible = false
          }
        })
      },

      deleteMessages: function (index) {
        this.contacts[this.counter].messages.splice(index , 1)
      },

    },
    
    

    created() {
     
    },

})
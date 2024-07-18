#!/usr/bin/python3

from pypresence import Presence
import random
import time

# ID de tu aplicación Discord of DeveloperPortal
client_id = 'HerePasteId'

RPC = Presence(client_id)

# Conectar al cliente de Discord
RPC.connect()

def get_current_time():
    hours = random.randint(900, 999)
    minutes = random.randint(0, 59)
    seconds = random.randint(0, 59)
    # Formatea el tiempo en formato HH:MM:SS como una cadena de texto
    return "{:03d}:{:02d}:{:02d}".format(hours, minutes, seconds)

# Obtener el tiempo actual en segundos
start_time = time.time()

def get_random_image_url():
    image_urls = [
        "https://i.pinimg.com/originals/b4/40/47/b44047a9fc1dada21f6603a671472871.gif",
        "https://i.pinimg.com/originals/f5/0d/72/f50d72cf807278c171fb989c5822b797.gif",
        "https://static.wikia.nocookie.net/024c7e82-4924-4e76-8950-c6f623866c3b/scale-to-width/755"
    ]
    return random.choice(image_urls)

def activity_random_details():
    
    activities = [
        "24 hours studying",
        "▄▅▆",
        "▄▅▆▇",
        "▄▅▆▇▉"
    ]

    # Utilizar una variable global para mantener el índice actual
    global current_index
    if 'current_index' not in globals():
        current_index = 0
    else:
        current_index = (current_index + 1) % len(activities)

    # Devolver la actividad en el índice actual
    return activities[current_index]

activity_phrase = "Activity elapsed"
activity_summary = "destinity ★"


text_gens = ["★", "          ★", "     ★", "      ★"]


try:
    # Bucle infinito para actualizar continuamente la presencia
    while True:
        start_value = random.randint(1, 2)

        buttons = [
            {"label": "Youtube", "url": "https://www.youtube.com"},
            {"label": "Google", "url": "https://www.google.com/"}
        ]
        random.shuffle(buttons)
        text_large_random = random.choice(text_gens)



        # Actualizar la presencia con el estado, el resumen de actividad y las imágenes actuales
        RPC.update(
            state=activity_phrase + ":   " + get_current_time(),
            large_image=get_random_image_url(),
            small_image=get_random_image_url(),
            details=activity_summary + ":   " + activity_random_details(),
            start=start_value,
            large_text="to >" +text_large_random,
            buttons=buttons,
            party_size=[1, 999],
            party_id="1jdhg5ks",
            

        )

        # Esperar un intervalo de tiempo (en segundos)
        time.sleep(.01)  # Por ejemplo, actualizar cada 1 segundo

        # Cambiar la frase cada segundo
        if activity_phrase == "Activity elapsed" or activity_summary == "destinity ★":
            activity_phrase = "Elapsed Activity"
            activity_summary = "★ n'destinity"
        else:
            activity_phrase = "Activity elapsed"
            activity_summary = "destinity ★"

except KeyboardInterrupt:
    RPC.close()

import random


def main():

    def Pop():
        artists = [
            "1 : Taylor swift",
            "2 : Sia",
            "3 : Ed sheeran",
            "4 : Lorde",
            "5 : Michael Jackson",
            "6 : King Princess"
        ]

        taylor_songs = ["Blank Space", "King of My Heart","Willow","Shake it Off","Exile","Me!","Lover"
                    ,"End Game","Delicate","Gorgeous","Fearless (Taylor's Version)","Fifteen (Taylor's Version)","The Man","Champagne Problems",
                        "Gold Rush","'tis the damn season","ivy","Style","Bad Blood","Wildest Dreams","I Know Places","Out of the Woods",
                        "How to Get the Girl","I Knew You Were Trouble" ]
        Sia_songs = ["Titanium (with David Guetta)","Chandelier","Cheap Thrills","Dusk Till Dawn (Feat Zayn)"]
        Ed_Sheeran_songs = ["Give Me Love","Shape of You","Happier","The A Team","Photograph","Perfect","Thinking Out Loud"]
        Lorde_songs = ["Liability","Homemade Dynamite","Royals","Team"]
        Michael_Jackson_songs = ["The Girl is Mine","Billie Jean","Beat it","Thriller","P.Y.T. (Pretty Young Thing)"]
        King_Princess_songs = ["Talia","1950","Holy"]

        print("Artists :")
        for i in artists :
            print(i)

        artist = int(input("Which artist dou you like ? "))

        if artist == 1 :
            print(random.choice(taylor_songs))
        elif artist == 2 :
             print(random.choice(Sia_songs))
        elif artist == 3 :
            print(random.choice(Ed_Sheeran_songs))
        elif artist == 4 :
            print(random.choice(Lorde_songs))
        elif artist == 5 :
            print(random.choice(Michael_Jackson_songs))
        elif artist == 6 :
            print(random.choice(King_Princess_songs))
        else :
            print("Please Enter One of the Numbers Given.")
            Pop()

    def Rock():
        artists = [
            "1 : Queen",
            "2 : Pink Floyed",
            "3 : The Rolling Stones",
            "4 : Dire Straits"
        ]
        queen_songs = ["Don't Stop Me Now","Bohemian Rhapsody","I Want To Break Free","Under Pressure"]
        pink_floyed_songs = ["Another Brick in the Wall","Hey You","Wish You Were Here","Comfortably Numb","Money","Time","Breathe"]
        The_Rolling_Stones = ["Paint it, Black","Satisfaction","Gimme Shelter","Start Me Up"]
        dire_straits_songs = ["Money for Nothing","Sultans of Swing","Brothers in Arms","Walk of life"]
        print("Artists :")

        for i in artists :
            print(i)

        artist = int(input("Which artist dou you like ? "))

        if artist == 1 :
            print(random.choice(queen_songs))
        elif artist == 2 :
            print(random.choice(pink_floyed_songs))
        elif artist == 3 :
            print(random.choice(The_Rolling_Stones))
        elif artist == 4 :
            print(random.choice(dire_straits_songs))
        else :
            print("Please Enter One of the Numbers Given.")
            Rock()

    def Classical():
        composers = [
            "1 : Pyotr Ilyich Tchaikovsky",
            "2 : Franz Liszt",
            "3 : Johann Strauss II",
            "4 : Ludwig van Beethoven",
            "5 : Wolfgang Amadeus Mozart",
        ]
        Pyotr = ["Tchaikovsky: Swan Lake, Op. 20, Act 2: Scene (Moderato)"
            ,"The Nutcracker, Op. 71: Act II Tableau 3: Variation 2: Dance of the Sugar-Plum Fairy"
             ,"Tchaikovsky: The Nutcracker, Op. 71, Act 2: Waltz of the Flowers","Violin Concerto in D Major, Op. 35: I. Allegro moderato"
            ,"Piano Concerto No. 1 in B-Flat Minor, Op. 23, TH 55: I. Allegro non troppo e molto maestoso"]
        Franz = ["Liebestraume, S541/R211 : No. 3: Nocturne in A-Flat Major","En rêve, nocturne, S. 207",
                 "Schwanengesang, S. 560: No. 4 Ständchen","Grandes Etudes de Paganini, S141 : No.3 In G Sharp Minor (La Campanella)",
                 "Hungarian Rhapsody No. 2 in C-Sharp Minor, S. 244/2","Un sospiro","Hungarian Rhapsody No.6 in D-Flat Major, S. 244"]
        Johann = ["Frühlingsstimmen, Op. 410 - Arr. Gerald Wirth","Strauss Jr., J.: Frühlingsstimmen, Op. 410","Marcha Radetzky, Op.228",
                 "Persian March, Op.289","Strauss Jr., J.: Rosen aus dem Süden, Op. 388","Strauss Jr., J.: Kaiser-Walzer, Op. 437",
                  "Wiener Blut, Op. 354"]
        Ludwig = ["Sonata No. 14 (Moonlight) in C-Sharp Minor', Op. 27 No. 2: I. Adagio sostenuto",
                  "Beethoven: Symphony No. 9 in D Minor, Op. 125 Choral: II. Molto vivace - Presto",
                  "Piano Sonata No. 17 In D Minor, Op. 31, No. 2 - The Tempest: 3 . Allegretto ",
                  "Bagatelle No. 25 in A Minor, Für Elise, WoO 59"]
        Wolfgang = ["Le Nozze di Figaro, K. 492: Sinfonia","Piano Concerto No. 21 in C Major, K. 467 Elvira Madigan: II. Andante",
                    "Serenade In G Major: Eine Kleine Nachtmusik, K. 525: I. Allegro",
                    "Symphony No. 40 in G Minor, K. 550 - (2nd version): 1. Molto Allegro","Fantasia in D Minor, K. 397",
                    "Requiem, K. 626: Lacrimosa"]
        print("Composers :")
        for i in composers :
                 print(i)

        composer = int(input("Which artist dou you like ? "))
        if composer == 1 :
                 print(random.choice(Pyotr))
        elif composer == 2 :
                 print(random.choice(Franz))
        elif composer == 3 :
                 print(random.choice(Johann))
        elif composer == 4 :
                 print(random.choice(Ludwig))
        elif composer == 5 :
                 print(random.choice(Wolfgang))
        else :
            print("Please Enter One of the Numbers Given.")
            Classical()

    genre = int(input("""What genre do you like ?
    1) Pop
    2) Rock
    3) Classical
    : """))

    if genre == 1 :
        Pop()
    elif genre == 2 :
        Rock()
    elif genre == 3 :
        Classical()
    else :
        print("Please Enter One of the Numbers Given.")
        main()
main()

while True:
    a = input("Do you want to go again? (yes or no) ")
    if a == "yes" :
        main()
        print("--------------------------------------------")
    else :
        if a == "no" :
            break
        else :
            print("Please Enter yes or no")



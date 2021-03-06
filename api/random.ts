import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "https://deno.land/x/lambda/mod.ts";

type Data = {
  data: Quote[];
};

type Quote = {
  id: string;
  quote: string;
};

const quotes = [
  {
    id: "1",
    quote:
      "You know what, it might just be a mound of oil-logged Pillsbury crescent dough, but it’s bomb-dot-com tasty, amigo.",
  },
  {
    id: "2",
    title:
      "When the ham fat combines with the Dr. Pepper—that’s dynamite, brother.",
  },
  {
    id: "3",
    title:
      "And then the fish sauce goes into the pot and it comes out as a whole festival of funk.",
  },
  {
    id: "4",
    title:
      "We’re takin’ you on a road rockin’ trip down to Flavortown, where the gravitational force of bacon warps the laws of space and time.",
  },
  {
    id: "5",
    title:
      "I may not agree with your dietary lifestyle, but those vegan peanut butter crabcakes are funkalicious.",
  },
  {
    id: "6",
    title:
      "Hello, fellow youths, would you like a slice of this gangster loaf of meat?",
  },
  {
    id: "7",
    title:
      "These cheesy pork fat pancakes are a hot frisbee of fun coming straight for your dome, muchacho.",
  },
  {
    id: "8",
    title:
      "That industrial-sized vat of lobster tater-tot bisque is lookin’ like a Hot tub in Flavortown.",
  },
  {
    id: "9",
    title:
      "I’m here in Waxahachie, Texas checking out this funky little joint serving up—that’s right—chicken-fried armadillo nuggets.",
  },
  {
    id: "10",
    title:
      "Seriously, man, I gotta tell you, for real this time, I’m not even messing around—those corned beef taquitos are lights-out delicious.",
  },
  {
    id: "11",
    title:
      "This pickle soup has at least 6,396 square yards of flavor, forcing it out of bounds.",
  },
  {
    id: "12",
    title: "That nacho lasagna is bombtastic! Put it on a flip flop, my man!",
  },
  {
    id: "13",
    title:
      "So you’re throwing those unseasoned ribs into a pot of boiling water and calling it BBQ? Well that’s some real deal pork flavor there, hoss.",
  },
  {
    id: "14",
    title:
      "I’m here at a funky little joint in southwest Little Rock where twin brothers Jerry and Barry Hawkington are making some righteous sloppy joe Pop-Tarts.",
  },
  {
    id: "15",
    title:
      "That’s a genuinely unwieldy portion of totchos; you should really consider serving those on a trashcan lid.",
  },
  {
    id: "16",
    title:
      "You’re gonna stuff all that cheese in that tight little hole? Shut the front door!",
  },
  {
    id: "17",
    title: "Those jalapeno waffle tostadas are bananas, and bananas is good.",
  },
  {
    id: "18",
    title: "That puts the shama lama in ding dong.",
  },
  {
    id: "19",
    title:
      "And all that Washashasahshashasha you put in the burrito puree is really gonna bring the funk.",
  },
  {
    id: "20",
    title:
      "That’s winner winner deep-fried Fruity Pebble beignet dinner right there.",
  },
];

export async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return {
    statusCode: 200,
    body: JSON.stringify(randomQuote),
    headers: { "content-type": "application/json" },
  };
}

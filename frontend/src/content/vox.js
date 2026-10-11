// Transcribed from the two supplied PDFs; asset order follows those references.
const root = 'https://customer-assets-lqy194kg.emergentagent.net/job_portfolio-landing-96/artifacts/';
const asset = name => `${root}${name}`;

export const voxImages = {
  hero: { src: asset('875ac28f07fbb683_Header.webp'), width: 1178, height: 590, alt: 'VOX Cinemas mobile app on a phone among blue waves' },
  prototype: { src: asset('1b74cbbfa6331745_Prototype%20Vector.webp'), width: 1762, height: 1877, alt: 'VOX Cinemas website displayed on a laptop on a wooden table' },
  flow: { src: '/images/vox/user-flow.webp', width: 1320, height: 5025, alt: 'VOX booking user flow, including cinema switching, seat holds, payment recovery and booking confirmation' },
};
export const voxFlowUrl = 'https://www.figma.com/board/EUn7fH8JWX1cmnk3uNq0Nr/VOX-Booking?node-id=0-1&t=liOuZWUENzRgBhww-1';

export const voxCopy = {
  title: 'Vox Cinema Booking experience: Reducing Friction When Switching Cinemas',
  glance: ['A self-initiated redesign project exploring how the VOX Cinemas booking experience could be made simpler, clearer, and more intuitive. The project focuses on identifying usability gaps in the existing experience and proposing a more streamlined movie-booking journey.'],
  problem: [
    'The current VOX booking experience follows a linear, venue-specific journey, making it difficult for users to change cinemas once they have started booking. When users reach the seat-selection stage and find limited availability, there is no clear way to explore or compare another venue without leaving the flow.',
    'This creates a loss-of-context problem: users may have to repeat earlier steps, lose their booking progress, and mentally track information from the previous venue. For a time-sensitive, high-intent task like cinema booking, this adds unnecessary cognitive load and increases the risk of flow abandonment.',
  ],
  question: 'How might we let users compare and switch venues at any point before payment, without losing their progress or confidence in the booking?',
  constraints: ['The redesign was approached within the boundaries of VOX Cinemas’ existing booking ecosystem. The goal was to improve the venue-selection and switching experience without changing the underlying booking, inventory, pricing, or payment systems.'],
  analysis: ['VOX does show the selected venue throughout the booking journey — but it exposes the venue as information, not as an actionable booking control.'],
  mental: ['People think in terms of "this movie, around this time, somewhere convenient." Cinema is a flexible detail, and the movie and time are the commitments. The booking flow assumes the opposite, treating venue as fixed once a showtime is clicked.'],
  current: 'Choose cinema → Choose showtime → Enter booking → Choose seats → Discover poor availability → Go back / restart',
  desired: 'Choose cinema → Choose showtime → Enter booking → Choose seats → Discover poor availability → Check other cinemas → Choose another cinema → Choose showtime → Select Seat → Continue',
  opportunity: ['VOX maintains venue visibility throughout the booking journey, but does not provide an equivalent venue-editing mechanism when the user discovers new information at seat selection. When seat availability is poor, let users check other cinemas without leaving the booking context, then revalidate only the information that depends on the selected venue.'],
  comparison: 'The competitive review shows that cinema selection and venue comparison are already well-established behaviours across VOX, Novo, Roxy, Reel, Cinépolis, and BookMyShow.',
  priorityLead: 'Now we move from “what is the problem?” to “what should we solve first?”',
  priority: ['I listed every idea that addresses a verified finding from Sections 2 and 3, scored it, and sorted it with MoSCoW. You asked for Must-have and Can-have, and I added Should-have as a middle tier because several ideas are valuable but depend on the Musts landing first.'],
  flow: ['The goal here is to show exactly where the new venue-switching behaviour enters the existing VOX journey. Rather than redesigning the entire booking flow, I’d introduce a recovery loop at the seat-selection stage, where the user has enough information to make an informed decision.'],
  wireframes: ['The redesign keeps the existing VOX visual language. The change is interaction-focused, not a complete visual redesign. Wireframes validate the flow and the venue-switching logic; final screens apply the VOX visual language to the validated flow'],
  prototype: ['The redesign connects movie discovery, cinema selection, showtime comparison, seat selection, food ordering, and payment into a consistent booking journey. Its central UX objective is to make cinema switching easier when seat availability is limited, while preserving relevant booking context and clearly communicating any changes to showtimes, formats, or pricing.'],
};

const screen = (id, title, description, filename) => ({ id, title, description, src: asset(filename), width: 390, height: 844 });
export const voxPrototype = [
  screen('home', 'Home Screen', 'What’s on, Coming soon, and entertainments', 'd3cdba9a8cf57f8f_01%20Home.webp'),
  screen('movies', 'Movies List', 'Movie Discovery, and categorization', 'df1748c748ac32fa_02%20Now%20Showing.webp'),
  screen('movie', 'Movie Page', 'Trailer, Movies details, Rating of the movie', 'f6c3c6b0f08c67bd_03%20Movie%20Detail.webp'),
  screen('cinemas', 'Cinema List', 'Date and List of cinema’s available', '44265d57a9a20739_04%20Select%20Cinema.webp'),
  screen('seats', 'Seat Map', 'Seat map with tier segmentation and pricing', 'cdf3dad6c7997f55_05%20Select%20Seats.webp'),
  screen('access', 'Access Control', 'Access condition confirmation page', '9269f7ea501987b4_06%20Conditions%20of%20Access.webp'),
  screen('food', 'Food & Beverages', 'In house food and beverages list', '523a17f271bdb907_07%20Food%20%26%20Beverages.webp'),
  screen('review', 'Review Page', 'Payment review, Offers and Vouchers', 'eb07da104c0aa4fe_08%20A%20Review%20%26%20Pay.webp'),
  screen('offers', 'Voucher and Offers Page', 'Offer application page', 'ece3b2bc9d84a319_09%20Offers%20%26%20Promo.webp'),
  { id: 'success', title: 'Success Page', description: 'Ticket issuing and confirmation details', src: '/images/vox/success.webp', width: 390, height: 844 },
];

export const voxWireframes = [
  screen('home', 'Home', '', '8cab795b97cf3ad1_01%20Home.webp'),
  screen('movies', 'Now Showing', '', 'dc6a51e62771fcd6_02%20Now%20Showing.webp'),
  screen('movie', 'Movie Detail', '', '797302fc3803034a_03%20Movie%20Detail.webp'),
  screen('cinemas', 'Select Cinema', '', '23663a1eb1264108_04%20Select%20Cinema.webp'),
  screen('seats', 'Select Seats', '', 'b2e34337fd936b9c_05%20Select%20Seats.webp'),
  screen('access', 'Conditions of Access', '', '3f90b8edf54fedef_06%20Conditions%20of%20Access.webp'),
  screen('food', 'Food & Beverages', '', '68cb78660234ca64_07%20Food%20%26%20Beverages.webp'),
  screen('review', 'Review & Pay', '', '568fc47de7498bbe_08%20A%20Review%20%26%20Pay.webp'),
  screen('offers', 'Offers & Promo', '', '3a9a52a8b4bba3da_09%20Offers%20%26%20Promo.webp'),
  screen('offer-applied', 'Review & Pay — offer applied', '', 'd7dedff98f1f2501_08%20B%20Review%20%26%20Pay.webp'),
  { id: 'success', title: 'Booking Confirmed', src: '/images/vox/wireframe-success.webp', width: 390, height: 844 },
];
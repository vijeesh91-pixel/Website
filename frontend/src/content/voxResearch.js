// Exact research content supplied in Case study_First part.pdf and the two table images.
export const voxNotes = [
  { tone: 'peach', items: ['Showtimes, formats, seat layouts, and pricing vary by cinema.', 'Promo eligibility may change based on venue, showtime, format, or ticket type.', 'Drop-off rises at seat selection when occupancy is high'] },
  { tone: 'peach', items: ['IMAX, 4DX, GOLD, MAX, and other formats may not be available at every venue.', 'Login/guest state is global booking context rather than venue-specific state.'] },
  { tone: 'blue', items: ['Users should be able to switch venues before seat selection without significant friction.', 'Users may want to compare multiple cinemas before committing to a showtime, particularly when availability, timing, format, or price differs.', 'Users may select a cinema manually or discover cinemas through location-based recommendations.'] },
  { tone: 'blue', items: ['Users typically begin the journey with a movie, cinema, date, or showtime rather than following one fixed entry path.', "Once seats have been selected and proceed to checkout, switching venues should trigger a clear confirmation because it may release the user's temporary seat hold."] },
];

export const voxHeuristics = [
  ['Homepage', 'H2', 'Match with real world', 'Cinema + Movie selectors are prominent, No Major issues', '0'],
  ["What's On", 'H3', 'Flexibility', 'Option can choose cinema/movie as a primary metrics.', '0'],
  ['Cinemas', 'H6', 'Recognition over recall', 'One long alphabetical list of cinemas, with no visible sort by distance, time or experience.', '2'],
  ['Showtime', 'H1', 'Visibility of system status', 'Every showtime pill looks identical, with no hint of seats left or how full the hall is. Users find out only after committing.', '3'],
  ['Showtimes', 'H3', 'User control and freedom', 'Change Showtime" is the only exit. Users wanting another venue must guess it helps. It also appears before the seat map is usable.', '3'],
  ['Restart', 'H7', 'Efficiency', 'Login/ Continue as Guest status is lost, when they restart.', '4'],
  ['Summary', 'H3', 'User control and freedom', 'The bar shows venue, date and time, but no edit control is visible, while Membership and Food & Drinks get a pencil.', '2'],
  ['Payments', 'H7', 'Flexibility', 'No ticket offers are auto applied while adding the card. Card validation is required which ads an additional step.', '1'],
];

export const voxCompetitors = ['Vox', 'Novo', 'Roxy', 'Reel', 'Cinepolis', 'Bookmyshow*'];
const yes = text => ({ status: 'supported', text });
const no = text => ({ status: 'unsupported', text });
const partial = text => ({ status: 'partial', text });
export const voxComparison = [
  ['Cinema first / Movie first discovery', yes('Strong'), yes(), yes(), yes(), yes(), yes()],
  ['Compare same movie across cinemas', yes('Strong'), yes('Strong'), yes(), yes(), yes(), yes()],
  ['Availability cue on showtime', no('Identical'), partial(), no(), no(), partial(), yes('Strong')],
  ['Cinema/ details remains visible during booking', yes(), yes(), partial(), partial(), partial(), yes('Strong')],
  ['Clear booking context', yes('Strong'), yes(), yes(), yes(), yes(), yes('Strong')],
  ['Sign-in /Guest flexibility', yes('MAF'), yes('FB/Google'), yes(), yes(), yes(), yes('Strong')],
  ['Guest access till seat selection', partial(), no('Poor'), yes('Strong'), yes(), yes(), yes()],
  ['Hold timer visible across the booking', yes(), yes(), yes(), yes(), yes(), yes()],
  ['Venue switching during active booking', no('Poor'), no(), yes('Strong'), no('Poor'), yes(), yes('Strong')],
  ['Venue switching from seat selection', no(), no(), yes('Strong'), no(), yes(), yes()],
  ['Seat tiers with prices on the map', no(), yes(), partial(), partial(), partial(), yes()],
  ['F&B integrated into journey', yes('Strong'), yes(), yes(), yes(), yes(), yes()],
  ['Guest checkout', yes(), partial('Poor'), yes('Easy'), yes('Easy'), yes(), yes('Easy')],
  ['Validating offer', yes(), yes(), yes(), yes(), yes(), yes('Easy Checkout')],
];
export const voxPriorities = [
  ['Availability Cue: Based on seat availability.', 'Very High', 'Low', 'P0'],
  ['Change Cinema : Allow users to go back to previous page during the booking experience.', 'Very High', 'Medium', 'P0'],
  ['Seat tiers with prices on the map.', 'High', 'Medium', 'P0'],
  ['Nearby sorting: allow to sort based on the distance.', 'Medium', 'Low', 'P1'],
  ['Login: Move after the seat map.', 'Medium', 'Medium', 'P1'],
  ['Move the summary to top for easy navigation.', 'Low', 'High', 'P2'],
  ['Resume-booking link for an interrupted flow.', 'Low', 'High', 'P2'],
  ['Change Showtime: Restricted to same Cinema, Give option to view all cinemas.', 'Low', 'Low', 'P2'],
];
export const voxScope = [
  { title: 'In scope', items: ['Cinema switching', 'Seat availability cue', 'Move login after seat selection', 'Sorting by distance', 'Seat tier / pricing'] },
  { title: 'Out of scope', items: ['Movie discovery redesign', 'Login redesign', 'F&B redesign', 'Payment redesign', 'Loyalty/membership redesign'] },
];
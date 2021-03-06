// VIEW - W: 100VW, H: 100VH
//  ----------------------------------------------------------------------------------------------
// |   VESSELS                        VESSEL & CONTAINER SYNC       CONTAINER                     |                                     |
// |   ----------------------------   ---------------------------   ----------------------------  |
// |  |                            | |                           | |                            | |
// |  | DEPARTURE: TODAY           | |                           | |                            | |
// |  |  VESSEL 1 CARD             | |                           | |                            | |
// |  |  VESSEL 2 CARD             | |       DRAG AND DROP       | |                            | |
// |  | DEPARTURE: TOMORROW (DATE) | |          UPDATE           | |                            | |
// |  |                            | |                           | |                            | |
// |  |                            | |                           | |                            | |
// |  | DEPARTURE: WEDNESDAY (DATE)| |                           | |                            | |
// |  |                            | |                           | |                            | |
// |  |                            | |                           | |                            | |
// |  | DEPARTURE: THURSDAY (DATE) | |                           | |                            | |
// |  |                            | |                           | |                            | |
// |   ----------------------------   ---------------------------   ----------------------------  |
// |                                                                                              |
// |   VESSELS READY FOR DEPARTURE                  HISTORY                                       |
// |   -------------------------------------------  --------------------------------------------  |
// |  |                                           ||                                            | |
// |  |                                           ||                                            | |
// |  |                                           ||                                            | |
// |  |                                           ||                                            | |
// |  |                                           ||                                            | |
// |  |                                           ||                                            | |
// |  |                                           ||                                            | |
// |  |                                           ||                                            | |
// |  |                                           ||                                            | |
// |  |                                           ||                                            | |
// |  |                                           ||                                            | |
// |  |                                           ||                                            | |
// |  --------------------------------------------  --------------------------------------------  |
//  ----------------------------------------------------------------------------------------------



// Default Info
// Vessel Card
//  -----------------------------------------------------------------------
// |  ID: Str                             Vessel Capacity: `${Int} TEU's`  |
// |  Utilization: Linear progress Bar           Expand view: Button Elem  |
//  -----------------------------------------------------------------------

// ICEBOX
// Extra Info
// Vessel Card
//  -----------------------------------------------------------------------
// |  ------   Name: Str                    Vessel Capacity: `${Int} TEU`  |
// | |Vessel|  Scheduled Departure: Date    Utilization: `${Float %} Full` |
// | |Photo |  Dock: Str e.g.: `a27`        Main Routes: [Str]             |
// |  ------                                                               |
// |                                               Expand view: Button Elem|
//  -----------------------------------------------------------------------




// Default Info
// Container Card
//  ---------------------------------------
// |  ID: Str    Expand view: Button Elem  |
//  ---------------------------------------

// ICEBOX
// Extra Info
// Container Card
//  ---------------------------------------------------------------------
// |  ------   Name: Str                       TEU: Int 2 | 1            |
// | | Comp |  Checkin date: Date              Container Location: Str   |
// | | Photo|  Final Destination: Str          Scheduled Departure: Date |
// |  ------                                                             |
// |                                             Expand view: Button Elem|
//  ---------------------------------------------------------------------

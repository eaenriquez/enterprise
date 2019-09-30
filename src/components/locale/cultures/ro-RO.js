/* eslint-disable no-bitwise, no-undef */

// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('ro-RO', {
  // layout/language
  language: 'ro',
  englishName: 'Romanian (Romania)',
  nativeName: 'română (România)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '.', // Infered
      timeSeparator: ':',
      short: 'dd.MM.yyyy', // use four digit year
      medium: 'd MMM yyyy',
      long: 'd MMMM yyyy',
      full: 'EEEE, d MMMM yyyy',
      month: 'd MMMM',
      year: 'MMMM yyyy',
      timestamp: 'HH:mm:ss',
      datetime: 'dd.MM.yyyy HH:mm',
      timezone: 'dd.MM.yyyy HH:mm zz',
      timezoneLong: 'dd.MM.yyyy HH:mm zzzz'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
      abbreviated: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
      narrow: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
      abbreviated: ['ian.', 'feb.', 'mar.', 'apr.', 'mai', 'iun.', 'iul.', 'aug.', 'sept.', 'oct.', 'nov.', 'dec.']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'HH:mm',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['a.m.', 'p.m.']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard
  currencySign: 'LEI',
  currencyFormat: '### ¤',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '### %',
    percentSuffix: ' %',
    percentPrefix: '',
    minusSign: '-',
    decimal: ',',
    group: '.',
    groupSizes: [3, 3]
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: 'Drepturi de autor &copy; {0} Infor. Toate drepturile rezervate. Grupul de simboluri și mărcile de design menționate în acest document sunt mărci comerciale și/sau mărci comerciale înregistrate ale Infor și/sau ale afiliaților și filialelor sale. Toate drepturile rezervate. Toate celelalte mărci comerciale menționate în acest document aparțin deținătorilor respectivi.' },
    Actions: { id: 'Actions', value: 'Acțiuni', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: 'Articole suplimentare', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: 'Adăugare', comment: 'Add' },
    AddComments: { id: 'AddComments', value: 'Adăugare comentarii', comment: 'Add comments to a form of data' },
    AddNewTab: { id: 'AddNewTab', value: 'Adăugare filă nouă', comment: 'Attached to a button that adds new tabs' },
    AdministrativeLeave: { id: 'AdministrativeLeave', value: 'Concediu administrativ', comment: 'As in vacation time from work' },
    AdvancedFilter: { id: 'AdvancedFilter', value: 'Creare filtru avansat', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: 'Alertă', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: 'Mesaj(e) de alertă pe pagină', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: 'Toate', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: 'Toate rezultatele pentru', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: 'Aliniere jos', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: 'Aliniere orizontală la centru', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: 'Chihlimbar', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: 'Ametist', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: 'Aplicare', comment: 'Text in a button to apply an action' },
    AppMenuTriggerText: { id: 'AppMenuTriggerText', value: 'Meniu', comment: 'Text in a special Module Tab used to trigger an Application Menu open or closed' },
    Attach: { id: 'Attach', value: 'Atașare', comment: 'Attach' },
    Available: { id: 'Available', value: 'Disponibil', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: 'Azuriu', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: 'Culoare de fundal', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: 'Între', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: 'Citat', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: 'Aldin', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: 'Marcat', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: 'Marcați acesta (aceasta)', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: 'Marcaj traseu navigare', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: 'Browser', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: 'Listă marcată', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: 'Calendar', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: 'Aparat foto', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: 'Revocare', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'Caps Lock activat', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: 'Coș', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: 'Centrare', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: 'Caractere rămase {0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: 'Numărul maxim de caractere ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. Pentru a modifica selecția, utilizați tastele săgeată.', comment: 'Audible Text for drop down list help' },
    ChangeView: { id: 'ChangeView', value: 'Schimbare vizualizare', comment: 'Change the current page from a list of options' },
    Checkbox: { id: 'Checkbox', value: 'Casetă de validare', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: 'Selectat', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: 'Golire', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: 'Golire filtru', comment: 'Clear the current filter criteria' },
    ClearFormatting: { id: 'ClearFormatting', value: 'Golire formatare', comment: 'Clear the formatting in editor' },
    ClearSelection: { id: 'ClearSelection', value: '(Golire selecție)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: 'Ceas', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: 'Închidere', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: 'Se poate face clic în editor', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: 'Copiere', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: 'Restrângere', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'Restrângere bară de aplicații', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: 'Coloane', comment: 'Columns tooltip' },
    Comments: { id: 'Comments', value: 'Comentarii', comment: 'Comments on an form' },
    CompanyHoliday: { id: 'CompanyHoliday', value: 'Vacanță a companiei', comment: 'A holiday provided by work.' },
    Component: { id: 'Component', value: 'Componentă', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: 'Compunere', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: 'Finalizat', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: 'Confirmare', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: 'Confirmați mesajul(ele) de pe pagină', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: 'Module cookie activate', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: 'Conține', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'Clasă Css', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: 'Decupare', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: 'Dată', comment: 'Describes filtering by a date data type' },
    Day: { id: 'Day', value: 'Ziua', comment: 'Shows view with day events' },
    Days: { id: 'Days', value: 'Zile ', comment: 'Show how many days until an event' },
    DaysOverdue: { id: 'DaysOverdue', value: '{0} zile trecute de la scadență', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: '{0} zile rămase', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: 'Ștergere', comment: 'Delete Toolbar Action Tooltip' },
    DeviceName: { id: 'Device', value: 'Dispozitiv', comment: 'Name of the Device' },
    DistributeHoriz: { id: 'DistributeHoriz', value: 'Distribuire pe orizontală', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: 'Document', comment: 'Document tooltip' },
    DiscretionaryTimeOff: { id: 'DiscretionaryTimeOff', value: 'Ora discreționară este dezactivată', comment: 'As in work time off' },
    Dirty: { id: 'Dirty', value: 'Rândul a fost modificat', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: 'Analiză detaliată', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: 'Cumulare', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: 'Vertical', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: 'Nu conține', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: 'Nu se termină cu', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: 'Nu este egal cu', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: 'Nu începe cu', comment: 'For condition filtering' },
    Down: { id: 'Down', value: 'Jos', comment: 'Down tooltip' },
    Download: { id: 'Download', value: 'Descărcare', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: 'Dublare', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: 'Selectat sau neselectat', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: 'Se termină cu', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: 'Introduceți comentarii aici...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: 'Eroare', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: 'Tipul de fișier nu este permis', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: 'A fost depășită limita pentru dimensiunea fișierului', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: 'A fost depășită limita maximă permisă pentru fișiere', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: 'Mesaj(e) de eroare pe pagină', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: 'Adresă de e-mail incorectă', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: 'Smarald', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: 'Extindere', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'Extindere bară de aplicații', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: 'Extindere/restrângere', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: 'Export ca foaie de calcul', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: 'Editare', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: 'Este egal cu', comment: 'Equals in icons for filtering' },
    Event: { id: 'Event', value: 'Eveniment', comment: 'As in an event that would be in a calendar' },
    ExitFullView: { id: 'ExitFullView', value: 'Ieșire vizualizare completă', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: 'Export', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'Export în Excel', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: 'Preferință', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: 'Încărcare fișier. Apăsați pe Enter pentru a răsfoi după un fișier', comment: 'Screen Reader instructions' },
    FieldFilter: { id: 'FieldFilter', value: 'Filtru câmp', comment: 'Used for Field Filter' },
    Filter: { id: 'Filter', value: 'Filtru', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: 'Prima pagină', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: 'Folder', comment: 'Folder tooltip' },
    From: { id: 'From', value: 'De la', comment: 'Start of a range (of dates)' },
    FullView: { id: 'FullView', value: 'Vizualizare completă', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: 'Înainte', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: 'Înapoi', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: 'Jos', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: 'Sus', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: 'Salt la', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: 'Grafit', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: 'Mai mare sau egal cu', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: 'Mai mare decât', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: 'Grilă', comment: 'Grid tooltip' },
    Hour: { id: 'Hour', value: 'Ora', comment: 'the hour portion of a time' },
    Hours: { id: 'Hours', value: 'Ore', comment: 'the hour portion of a time (plural)' },
    HeadingThree: { id: 'HeadingThree', value: 'Antet trei', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: 'Antet patru', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: 'Cel mai mare', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: 'Pagină de pornire', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'Vizualizare HTML', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: 'Imagine', comment: 'Image of something' },
    Import: { id: 'Import', value: 'Import', comment: 'Import tooltip' },
    Info: { id: 'Info', value: 'Informații', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: 'Mesaj(e) de informare pe pagină', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: 'În curs...', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: 'Inserare', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: 'Inserare ancoră', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: 'Inserare imagine', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: 'Inserare legătură', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'Inserare URL', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: 'Cursiv', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: 'Dată incorectă', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: 'Oră incorectă', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: 'Inventar', comment: 'Icon button tooltop for Inventory Action' },
    InRange: { id: 'InRange', value: 'În interval', comment: 'In Range in icons for filtering' },
    IsEmpty: { id: 'IsEmpty', value: 'Este gol', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: 'Nu este gol', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: 'Elemente selectate', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: 'Centrare', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: 'Aliniere la stânga', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: 'Aliniere la dreapta', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: 'Cuvânt cheie', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: 'Lansare', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: 'Ultima pagină', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: 'Stânga', comment: 'Left tooltip' },
    Legend: { id: 'Legend', value: 'Legendă', comment: 'As in a chart legend' },
    LessOrEquals: { id: 'LessOrEquals', value: 'Mai mic sau egal cu', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: 'Mai mic decât', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: 'Legătură', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: 'Încărcare', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: 'Se încarcă', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: 'Setări regionale', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: 'Blocat', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: 'Deconectare', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: 'Căutare', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: 'Cel mai mic', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: 'E-mail', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'Marcaj', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: 'Maximizare', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: 'Mediană', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: 'Medie', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: 'Meniu', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Partajare cu Ming.le', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: 'Minute', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: 'Minimizare', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: 'Minus', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: 'Mobil', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: 'Lună', comment: 'As in a date month' },
    More: { id: 'More', value: 'Mai multe...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: 'Mai multe acțiuni', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: 'Deplasare la stânga', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: 'Deplasare la dreapta', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', Modificat', comment: 'for modified form fields' },
    New: { id: 'New', value: 'Nou', comment: 'Add new rowstatus in datagrid' },
    NewDocument: { id: 'NewDocument', value: 'Document nou', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: 'Element nou', comment: 'New item in listbuilder' },
    NewWindow: { id: 'NewWindow', value: 'Fereastră nouă', comment: 'Contents open in a new browser window.' },
    Next: { id: 'Next', value: 'Următor', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: 'Pagina următoare', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: 'Luna următoare', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: 'Nu', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: 'Date indisponibile', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: 'Nu există date disponibile, pentru a vedea mai multe rezultate, efectuați o nouă selecție de filtrare.', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: 'Nu există date disponibile, pentru a vedea mai multe rezultate, efectuați o selecție în lista de mai sus.', comment: 'Shown when there is no rows shown in a list' },
    None: { id: 'None', value: 'Niciuna', comment: 'None to pick clear color' },
    NoResults: { id: 'NoResults', value: 'Niciun rezultat', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: 'Normal', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: 'Note', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: 'Neselectat', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: 'Listă numerotată', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: 'Ok', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: 'Deschidere/înapoi/închidere', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: 'Deschidere/închidere', comment: 'Open / Close tooltip' },
    OperatingSystem: { id: 'OperatingSystem', value: 'Sistem de operare', comment: 'Device Operating System' },
    OrderedList: { id: 'OrderedList', value: 'Inserare/eliminare listă numerotată', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: 'pagina ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: 'Pagina {0} din {1}', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: 'În acest moment sunteți la pagina ', comment: 'Text on the pager links' },
    PaidTimeOff: { id: 'PaidTimeOff', value: 'Ora plătită este dezactivată', comment: 'As in vacation from work' },
    Paste: { id: 'Paste', value: 'Lipire', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>Parola trebuie:</strong><br>să fie alcătuită din cel puțin 10 caractere<br>să conțină cel puțin un caracter majusculă<br>să conțină cel puțin un caracter minusculă<br>să conțină un caracter special<br>să nu conțină numele dvs. de utilizator<br>să nu fie o parolă utilizată anterior<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: 'Parola trebuie să se potrivească', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: 'Vârf', comment: 'the max or peak value in a chart' },
    Pending: { id: 'Pending', value: 'În așteptare', comment: 'An event or task is pending' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: 'Personalizare coloane', comment: 'Customize Columns in a Grid' },
    Plan: { id: 'Plan', value: 'Plan', comment: 'As in type of vacation plan' },
    Platform: { id: 'Platform', value: 'Platformă', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: 'Perioadă', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: 'Apăsați săgeată jos pentru a selecta o dată', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: 'Apăsați Shift+F10 pentru a deschide meniul contextual.', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: 'Anterior', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: 'Luna anterioară', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: 'Pagina anterioară', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: 'Imprimare', comment: 'Print tooltip' },
    Range: { id: 'Range', value: 'Interval', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '{0} Înregistrări pe pagină', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: 'Refacere', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: 'Reordonarea rândurilor', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: 'Reîmprospătare', comment: 'Refresh tooltip' },
    RequestTimeOff: { id: 'RequestTimeOff', value: 'Solicitare timp liber', comment: 'Making a request for time off work.' },
    Required: { id: 'Required', value: 'Obligatoriu', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: 'Resetare', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: 'Resetare la valori implicite', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: 'Rezultat', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: 'Rezultate', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: 'Aliniere la dreapta', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: 'Aliniere la dreapta', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: 'Dreapta', comment: 'Right' },
    Roles: { id: 'Roles', value: 'Roluri', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: 'Înălțime rând', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: 'Rubin', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: 'Executare filtru', comment: 'Execute the current filter criteria' },
    SameWindow: { id: 'SameWindow', value: 'Aceeași fereastră', comment: 'Contents open in the same browser window.' },
    Save: { id: 'Save', value: 'Salvare', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: 'Salvare vizualizare curentă', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: 'Vizualizări salvate', comment: 'Label for a list of Views' },
    Schedule: { id: 'Schedule', value: 'Program', comment: 'Shows a schedule view' },
    Seconds: { id: 'Seconds', value: 'Secunde', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: 'Căutare', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: 'Căutare după nume coloană', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: 'Căutare în folder', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: 'Listă de căutare', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: 'Selectare', comment: 'text describing a select action' },
    SelectDay: { id: 'SelectDay', value: 'Selectare zi', comment: 'Select a day in the calendar picker' },
    Selected: { id: 'Selected', value: 'Selectat', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: 'Selectare toate', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: 'Trimitere', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: 'Setare oră', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: 'Setări', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: 'Mică', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowFilterRow: { id: 'ShowFilterRow', value: 'Afișare rând filtru', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: 'Afișare mai puține', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: 'Afișare mai multe', comment: 'Show more form content' },
    SickTime: { id: 'SickTime', value: 'Perioadă boală', comment: 'Time off sick from work' },
    Slate: { id: 'Slate', value: 'Ardezie', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: 'Diapozitivul {0} din {1}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: 'Diapozitivele {0} și {1} din {2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: 'Identificator pentru', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: 'Identificator interval maxim pentru', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: 'Identificator interval minim pentru', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: 'Salt la conținutul principal', comment: 'Skip link in header, jumps when clicked on to main area' },
    Status: { id: 'Status', value: 'Stare', comment: 'Status of someting thats submitted fx in progress, approved' },
    StartsWith: { id: 'StartsWith', value: 'Începe cu', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: '{0} din {1} pași finalizați', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: 'Tăiere text', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: 'Sortare ascendentă', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: 'Sortare descendentă', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: 'Sortare descrescătoare', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: 'Sortare crescătoare', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: 'Indice', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: 'Exponent', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: 'File...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'Marcaj', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: 'Mare', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: 'Țintă', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TeamEvent: { id: 'TeamEvent', value: 'Eveniment de echipă', comment: 'Having an event with a work team' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'Testarea setărilor regionale implicite', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: 'Culoare text', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: 'Pentru a le încărca, glisați și fixați fișierele', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: 'Glisare și fixare sau <span class="hyperlink">Selectarea fișierelor</span> pentru încărcare', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: 'Anularea încărcării acestui fișier', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: 'Închideți această eroare', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: 'Închideți această eroare', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: 'Cronometru', comment: 'Timer tooltip' },
    To: { id: 'To', value: 'Către', comment: 'End of a range (of dates)' },
    Today: { id: 'Today', value: 'Astăzi', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: 'Comutare text aldin', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: 'Comutare antet 3', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: 'Comutare antet 4', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: 'Comutare text cursiv', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: 'Comutare text subliniat', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: 'Bară de instrumente', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: 'Aliniere sus', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: 'Total', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: 'Totaluri', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: 'Restrângere arbore', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: 'Extindere arbore', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: 'Turcoaz', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: 'Sus', comment: 'Up tooltip' },
    UpComingEvents: { id: 'UpComingEvent', value: 'Evenimente viitoare', comment: 'List of upcoming calendar events' },
    UpComingTimeOff: { id: 'UpComingTimeOff', value: 'Timp liber viitor', comment: 'As in time off work' },
    Upload: { id: 'Upload', value: 'Încărcare', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: 'Dată indisponibilă', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: 'Subliniere', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: 'Anulare', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: 'Deblocat', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: 'Inserare/eliminare listă marcată', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: 'Acest conținut nu este disponibil, deoarece folosește caracteristici neacceptate în versiunea curentă a browserului tău.', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'URL', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. Utilizați tastele săgeată pentru a selecta.', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. Utilizați Enter sau săgeată jos pentru a căuta.', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: 'Utilizator', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: 'Profil utilizator', comment: 'User Profile tooltip' },
    Version: { id: 'Version', value: 'Versiune IDS', comment: 'Version of IDS' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: 'Aliniere verticală la centru', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: 'Vizualizare sursă', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: 'Vizualizare imagine', comment: 'Toggle the visual view in the editor' },
    Week: { id: 'Week', value: 'Săptămâna', comment: 'Shows a view of the current weeks events' },
    Year: { id: 'Year', value: 'An', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: 'Da', comment: 'On a dialog button' }
  }
});

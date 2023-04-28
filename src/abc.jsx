function DropdownMenu() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [calendarOpen, setCalendarOpen] = useState(false);
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setCalendarOpen(false);
    };
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
      setCalendarOpen(false);
    };
  
    const toggleCalendar = () => {
      setCalendarOpen(!calendarOpen);
    };
  
    return (
      <div className="dropdown-menu">
        <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select an Option
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#" onClick={() => handleOptionClick('Option 1')}>
            Option 1
          </a>
          <a className="dropdown-item" href="#" onClick={() => handleOptionClick('Option 2')}>
            Option 2
          </a>
          <div className="dropdown-divider"></div>
          <div className="dropdown-item calendar-dropdown-item" onClick={toggleCalendar}>
            <div className="calendar-dropdown-item-label">Select a Date</div>
            {calendarOpen && (
              <div className="calendar-dropdown-item-calendar">
                <Calendar onChange={handleDateChange} value={selectedDate} />
              </div>
            )}
          </div>
        </div>
        <div>
          Selected Option: {selectedOption}
        </div>
        <div>
          Selected Date: {selectedDate && selectedDate.toString()}
        </div>
      </div>
    );
  }
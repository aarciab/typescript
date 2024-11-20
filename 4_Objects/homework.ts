(() => {
  // Check and provide correct types
  // Set correct type and definition associated to string (1 pt)
  const batman = "Bruce";
  const superman = "Clark";
  const isPresent = false;

  // Set correct type and definition associated to tuple (1 pt)
  const heroes = [batman, superman];
  const villain = ["Lex Lutor", 5, true];

  // Set correct type and definition associated array (1 pt)
  const justiceLeague = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  // Define an enum with values below (1 pt)
  const powerLevelFlash = 5;
  const powerLevelSuperman = 100;
  const powerLevelBatman = 1;
  const powerLevelAcuaman = 0;

  // Make this generic JS function to be incompliance with TS (1 pt)
  function activateJusticeSignal() {
    return "active";
  }

  // Make this generic JS function to be incompliance with TS (1 pt)
  function askForHelp() {
    console.log("Help!!!");
  }

  // Identify possible semantic error and place correct casting (1 pt)
  const powerLevel: any = "100";
  const length: number = powerLevel.length;
  console.log(`Power level contains '${length}' characters`);
})();

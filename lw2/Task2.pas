PROGRAM PaulRevere(INPUT, OUTPUT);
USES 
  DOS;
VAR
  GetQuery: STRING;
BEGIN {PaulRevere}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  GetQuery := GetEnv('QUERY_STRING');
  IF GetQuery = 'lanterns=1'
  THEN
    WRITELN('The British are coming by land.')
  ELSE
    IF GetQuery = 'lanterns=2'
    THEN
      WRITELN('The British are coming by sea.')
    ELSE
      WRITELN('Sarah didn''t say.')
END. {PaulRevere}
import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import {Options,OneOption} from './Options'
import NewCustomerRegistration from './NewCustomerRegistration';
import CreateMenu from './CreateMenu';
import ConfigureRestaurant from './ConfigureRestaurant';
import POSView from './POSView';



export default class IndecisionApp extends React.Component {    
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.pickOptions = this.pickOptions.bind(this);
    this.handleOption = this.handleOption.bind(this);
    this.state = {
      options : [],
      itemviewfilter : {
        group:undefined,
        subcategory:undefined
      },
      staticmenu : [{"id":"F1","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"NON VEG","item":"CHICKEN CHIMICHANGA","rate":1000.00,"tax":5},
      {"id":"F2","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"NON VEG","item":"GLAZED CHICKEN SKEWERS","rate":1000.00,"tax":5},
      {"id":"F3","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"NON VEG","item":"CHICKEN POPCORN","rate":1000.00,"tax":5},
      {"id":"F4","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"SEA FOOD","item":"PANKO PRAWNS","rate":1500.00,"tax":5},
      {"id":"F5","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"SEA FOOD","item":"FISH FINGER","rate":1000.00,"tax":5},
      {"id":"F6","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"VEG","item":"ASSORTED BRUSCHETTA","rate":600.00,"tax":5},
      {"id":"F7","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"VEG","item":"CHEESE CHILLI TOST","rate":600.00,"tax":5},
      {"id":"F8","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"VEG","item":"MUSHROOM DUPLEX","rate":800.00,"tax":5},
      {"id":"F9","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"VEG","item":"NACHOS WITH SALSA","rate":600.00,"tax":5},
      {"id":"F10","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"VEG","item":"COTTAGE CHEESE SHASHLIK","rate":800.00,"tax":5},
      {"id":"F11","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"NON VEG","item":"ORIENTEL CHILLI CHICKEN","rate":1000.00,"tax":5},
      {"id":"F12","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"NON VEG","item":"CHICKEN LOLIPOP","rate":1000.00,"tax":5},
      {"id":"F13","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"NON VEG","item":"CHICKEN DIMSUM","rate":1000.00,"tax":5},
      {"id":"F14","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"NON VEG","item":"ROAR FIREY CHICKEN","rate":1200.00,"tax":5},
      {"id":"F15","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"SEA FOOD","item":"CHILLI GARLIC PRAWN","rate":1500.00,"tax":5},
      {"id":"F16","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"VEG","item":"VEG SALT N PEPPER","rate":800.00,"tax":5},
      {"id":"F17","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"VEG","item":"HONEY CHILLI POTATOS","rate":800.00,"tax":5},
      {"id":"F18","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"VEG","item":"CHILLI PANEER","rate":800.00,"tax":5},
      {"id":"F19","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"VEG","item":"VEG DIMSUM","rate":800.00,"tax":5},
      {"id":"F20","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"VEG","item":"VEG SPRING ROLL","rate":800.00,"tax":5},
      {"id":"F21","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"VEG","item":"VEG FALAL ROLL","rate":1000.00,"tax":5},
      {"id":"F22","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"NON VEG","item":"MURG MALAI TIKKA","rate":1000.00,"tax":5},
      {"id":"F23","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"NON VEG","item":"TANDOORI JHINGA","rate":1500.00,"tax":5},
      {"id":"F24","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"NON VEG","item":"LUCKNOWI CHICKEN TIKKA(6PCS)","rate":1000.00,"tax":5},
      {"id":"F25","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"NON VEG","item":"MUTTON SEEKH GILAFI","rate":1000.00,"tax":5},
      {"id":"F26","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"SEA FOOD","item":"AJAWANI FISH TIKKA","rate":1000.00,"tax":5},
      {"id":"F27","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"VEG","item":"KUMBH BEMISAL","rate":800.00,"tax":5},
      {"id":"F28","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"VEG","item":"TANDOORI SOYA CHAP","rate":800.00,"tax":5},
      {"id":"F29","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"VEG","item":"ACHARI PANEER TIKKA","rate":800.00,"tax":5},
      {"id":"F30","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"VEG","item":"DAHI PAPAD KE KEBAB","rate":800.00,"tax":5},
      {"id":"F31","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"VEG","item":"TANDOORI KANCHE ALOO","rate":800.00,"tax":5},
      {"id":"F32","group":"FOOD","subgroup":"PASTA","category":"PIZZA & PASTA","subcategory":"NON VEG","item":"PENNE CHICKEN PASTA","rate":1200.00,"tax":5},
      {"id":"F33","group":"FOOD","subgroup":"PASTA","category":"PIZZA & PASTA","subcategory":"VEG","item":"PENNE PASTA","rate":1000.00,"tax":5},
      {"id":"F34","group":"FOOD","subgroup":"PIZZA","category":"PIZZA & PASTA","subcategory":"NON VEG","item":"CHICKEN TIKKA PIZZA","rate":1200.00,"tax":5},
      {"id":"F35","group":"FOOD","subgroup":"PIZZA","category":"PIZZA & PASTA","subcategory":"VEG","item":"PIZZA MARGARITA","rate":1000.00,"tax":5},
      {"id":"F36","group":"FOOD","subgroup":"SALAD","category":"SALADS","subcategory":"NON VEG","item":"CHICKEN CAESER SALAD","rate":800.00,"tax":5},
      {"id":"F37","group":"FOOD","subgroup":"SALAD","category":"SALADS","subcategory":"NON VEG","item":"BBQ CHICKEN SALAD","rate":800.00,"tax":5},
      {"id":"F38","group":"FOOD","subgroup":"SALAD","category":"SALADS","subcategory":"VEG","item":"CAESER SALAD","rate":600.00,"tax":5},
      {"id":"F39","group":"FOOD","subgroup":"SALAD","category":"SALADS","subcategory":"VEG","item":"GREEN FETA SALAD","rate":600.00,"tax":5},
      {"id":"F40","group":"TOBACCO","subgroup":"SALAD","category":"SALADS","subcategory":"VEG","item":"BIDI","rate":600.00,"tax":5},
      {"id":"F41","group":"LIQUOR","subgroup":"SALAD","category":"SALADS","subcategory":"VEG","item":"BEER","rate":600.00,"tax":5},
      {"id":"X1","group":"LIQUOR","subgroup":"SPIRITS","category":"APERITIF'S","subcategory":"IMPORTED","item":"CAMPARI","rate":800.00 },
{"id":"X2","group":"LIQUOR","subgroup":"SPIRITS","category":"APERITIF'S","subcategory":"IMPORTED","item":"APEROL","rate":800.00 },
{"id":"X3","group":"LIQUOR","subgroup":"SPIRITS","category":"APERITIF'S","subcategory":"IMPORTED","item":"MARTINI EXTRA DRY ","rate":800.00 },
{"id":"X4","group":"LIQUOR","subgroup":"SPIRITS","category":"APERITIF'S","subcategory":"IMPORTED","item":"MARTINI ROSSO","rate":800.00 },
{"id":"X5","group":"LIQUOR","subgroup":"SPIRITS","category":"APERITIF'S","subcategory":"IMPORTED","item":"MARTINI BIANCO","rate":800.00 },
{"id":"X6","group":"LIQUOR","subgroup":"SPIRITS","category":"APERITIF'S","subcategory":"IMPORTED","item":"RICARD","rate":800.00 },
{"id":"X7","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY BLENDED","subcategory":"IMPORTED","item":"JOHNNIE WALKER XR 21 YRS","rate": 1900.00 },
{"id":"X8","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY BLENDED","subcategory":"IMPORTED","item":"JOHNNIE WALKER BLUE LABEL ","rate": 2000.00 },
{"id":"X9","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY BLENDED","subcategory":"IMPORTED","item":"ROYAL SALUTE 21 YRS","rate": 2100.00 },
{"id":"X10","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY BLENDED","subcategory":"IMPORTED","item":"JOHNNIE WALKER GOLD LABEL RESERVE","rate": 1200.00 },
{"id":"X11","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY BLENDED","subcategory":"IMPORTED","item":"JOHNNIE WALKER DOUBLE BLACK","rate": 1000.00 },
{"id":"X12","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY BLENDED","subcategory":"IMPORTED","item":"JOHNNIE WALKER BLACK LABEL 12 YRS","rate":900.00 },
{"id":"X13","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY BLENDED","subcategory":"IMPORTED","item":"JOHNNIE WALKER RED LABEL","rate":700.00 },
{"id":"X14","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY BLENDED","subcategory":"IMPORTED","item":"CHIVAS REGAL 12 YRS","rate":900.00 },
{"id":"X15","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY SINGLE MALT","subcategory":"IMPORTED","item":"GLENFIDDICH 18 YRS","rate": 1800.00 },
{"id":"X16","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY SINGLE MALT","subcategory":"IMPORTED","item":"GLENLIVET 18 YRS","rate": 1700.00 },
{"id":"X17","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY SINGLE MALT","subcategory":"IMPORTED","item":"GLENFIDDICH 15 YRS","rate": 1600.00 },
{"id":"X18","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY SINGLE MALT","subcategory":"IMPORTED","item":"GLENLIVET 15 YRS","rate": 1500.00 },
{"id":"X19","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY SINGLE MALT","subcategory":"IMPORTED","item":"OBAN 14 YRS","rate": 1400.00 },
{"id":"X20","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY SINGLE MALT","subcategory":"IMPORTED","item":"GLENFIDDICH 12 YRS","rate": 1200.00 },
{"id":"X21","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY SINGLE MALT","subcategory":"IMPORTED","item":"THE BALVENIE 12 YRS","rate": 1200.00 },
{"id":"X22","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY SINGLE MALT","subcategory":"IMPORTED","item":"GLENLIVET 12 YRS","rate": 1200.00 },
{"id":"X23","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY SINGLE MALT","subcategory":"IMPORTED","item":"CARDU 12 YRS","rate": 1200.00 },
{"id":"X24","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY SINGLE MALT","subcategory":"IMPORTED","item":"TALISKER 10 YRS","rate": 1200.00 },
{"id":"X25","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY SINGLE MALT","subcategory":"IMPORTED","item":"GLENMORANGIE 10YRS","rate": 1200.00 },
{"id":"X26","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY SINGLE MALT","subcategory":"IMPORTED","item":"LAPHROAIG 10 YRS","rate": 1200.00 },
{"id":"X27","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY JAMACIAN/AMERICAN","subcategory":"IMPORTED","item":"JACK DANIELS","rate":900.00 },
{"id":"X29","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY JAMACIAN/AMERICAN","subcategory":"IMPORTED","item":"JAMESON","rate":800.00 },
{"id":"X30","group":"LIQUOR","subgroup":"SPIRITS","category":"WHISKEY JAMACIAN/AMERICAN","subcategory":"IMPORTED","item":"JIM BEAM","rate":800.00 },
{"id":"X31","group":"LIQUOR","subgroup":"SPIRITS","category":"VODKA","subcategory":"IMPORTED","item":"ROBERTO CAVALLI","rate": 1200.00 },
{"id":"X32","group":"LIQUOR","subgroup":"SPIRITS","category":"VODKA","subcategory":"IMPORTED","item":"BALUGA NOBLE","rate": 1200.00 },
{"id":"X33","group":"LIQUOR","subgroup":"SPIRITS","category":"VODKA","subcategory":"IMPORTED","item":"GREY GOOSE","rate":900.00 },
{"id":"X34","group":"LIQUOR","subgroup":"SPIRITS","category":"VODKA","subcategory":"IMPORTED","item":"BELVEDERE","rate":900.00 },
{"id":"X35","group":"LIQUOR","subgroup":"SPIRITS","category":"VODKA","subcategory":"IMPORTED","item":"CIROC","rate":900.00 },
{"id":"X36","group":"LIQUOR","subgroup":"SPIRITS","category":"VODKA","subcategory":"IMPORTED","item":"ABSOLUT BLUE","rate":700.00 },
{"id":"X37","group":"LIQUOR","subgroup":"SPIRITS","category":"VODKA","subcategory":"IMPORTED","item":"ABSOLUT ELYX","rate":900.00 },
{"id":"X38","group":"LIQUOR","subgroup":"SPIRITS","category":"VODKA","subcategory":"INDIAN","item":"HOUSE VODKA","rate":600.00 },
{"id":"X39","group":"LIQUOR","subgroup":"SPIRITS","category":"GIN","subcategory":"IMPORTED","item":"HENDRICK'S","rate": 1000.00 },
{"id":"X40","group":"LIQUOR","subgroup":"SPIRITS","category":"GIN","subcategory":"IMPORTED","item":"BOMBAY SAPPHIRE","rate":800.00 },
{"id":"X41","group":"LIQUOR","subgroup":"SPIRITS","category":"GIN","subcategory":"IMPORTED","item":"TENQUERAY","rate":800.00 },
{"id":"X42","group":"LIQUOR","subgroup":"SPIRITS","category":"GIN","subcategory":"IMPORTED","item":"GORDON","rate":600.00 },
{"id":"X43","group":"LIQUOR","subgroup":"SPIRITS","category":"GIN","subcategory":"IMPORTED","item":"BEEFEATER","rate":600.00 },
{"id":"X44","group":"LIQUOR","subgroup":"SPIRITS","category":"RUM","subcategory":"INDIAN","item":"BACARDI WHITE ","rate":600.00 },
{"id":"X45","group":"LIQUOR","subgroup":"SPIRITS","category":"RUM","subcategory":"INDIAN","item":"BACARDI GOLD","rate":600.00 },
{"id":"X46","group":"LIQUOR","subgroup":"SPIRITS","category":"RUM","subcategory":"INDIAN","item":"BACARDI BLACK","rate":600.00 },
{"id":"X47","group":"LIQUOR","subgroup":"SPIRITS","category":"RUM","subcategory":"INDIAN","item":"OLD MONK","rate":600.00 },
{"id":"X48","group":"LIQUOR","subgroup":"SPIRITS","category":"TEQUILA","subcategory":"IMPORTED","item":"CORRALEJO ANEJO","rate":900.00 },
{"id":"X49","group":"LIQUOR","subgroup":"SPIRITS","category":"TEQUILA","subcategory":"IMPORTED","item":"CORRALEJO REPOSADO","rate":900.00 },
{"id":"X50","group":"LIQUOR","subgroup":"SPIRITS","category":"TEQUILA","subcategory":"IMPORTED","item":"CORRALEJO BLANCO","rate":900.00 },
{"id":"X51","group":"LIQUOR","subgroup":"SPIRITS","category":"TEQUILA","subcategory":"IMPORTED","item":"SAUZA GOLD","rate":800.00 },
{"id":"X52","group":"LIQUOR","subgroup":"SPIRITS","category":"TEQUILA","subcategory":"IMPORTED","item":"SAUZA SILVER","rate":800.00 },
{"id":"X53","group":"LIQUOR","subgroup":"SPIRITS","category":"TEQUILA","subcategory":"IMPORTED","item":"CAMINO BLANCO","rate":800.00 },
{"id":"X54","group":"LIQUOR","subgroup":"SPIRITS","category":"TEQUILA","subcategory":"IMPORTED","item":"DON ANGEL","rate":700.00 },
{"id":"X55","group":"LIQUOR","subgroup":"SPIRITS","category":"TEQUILA","subcategory":"IMPORTED","item":"PATRON SILVER","rate": 1000.00 },
{"id":"X56","group":"LIQUOR","subgroup":"SPIRITS","category":"COGNACE","subcategory":"IMPORTED","item":"HENNESSY VSOP","rate":800.00 },
{"id":"X57","group":"LIQUOR","subgroup":"SPIRITS","category":"COGNACE","subcategory":"IMPORTED","item":"HENNESSY XO","rate": 1200.00 },
{"id":"X58","group":"LIQUOR","subgroup":"SPIRITS","category":"COGNACE","subcategory":"IMPORTED","item":"REMY MARTIN VSOP","rate":800.00 },
{"id":"X59","group":"LIQUOR","subgroup":"SPIRITS","category":"COGNACE","subcategory":"IMPORTED","item":"REMY MARTIN XO","rate": 1200.00 },
{"id":"X60","group":"LIQUOR","subgroup":"SPIRITS","category":"COGNACE","subcategory":"INDIAN","item":"HONEY BEE","rate":600.00 },
{"id":"X61","group":"LIQUOR","subgroup":"SPIRITS","category":"LIQUERS","subcategory":"IMPORTED","item":"CAFÉ PATRON","rate":900.00 },
{"id":"X62","group":"LIQUOR","subgroup":"SPIRITS","category":"LIQUERS","subcategory":"IMPORTED","item":"JAGERMEISTER ","rate":800.00 },
{"id":"X63","group":"LIQUOR","subgroup":"SPIRITS","category":"LIQUERS","subcategory":"IMPORTED","item":"ABSINTHE","rate":800.00 },
{"id":"X64","group":"LIQUOR","subgroup":"SPIRITS","category":"LIQUERS","subcategory":"IMPORTED","item":"DRAMBUIE","rate":800.00 },
{"id":"X65","group":"LIQUOR","subgroup":"SPIRITS","category":"LIQUERS","subcategory":"IMPORTED","item":"BAILEYS","rate":800.00 },
{"id":"X66","group":"LIQUOR","subgroup":"SPIRITS","category":"LIQUERS","subcategory":"IMPORTED","item":"COINTREAU","rate":800.00 },
{"id":"X67","group":"LIQUOR","subgroup":"SPIRITS","category":"LIQUERS","subcategory":"IMPORTED","item":"SAMBUCA","rate":800.00 },
{"id":"X68","group":"LIQUOR","subgroup":"SPIRITS","category":"LIQUERS","subcategory":"IMPORTED","item":"KAHLUA","rate":800.00 },
{"id":"X69","group":"LIQUOR","subgroup":"SPIRITS","category":"LIQUERS","subcategory":"IMPORTED","item":"MALIBU","rate":800.00 },
{"id":"X70","group":"LIQUOR","subgroup":"SPIRITS","category":"LIQUERS","subcategory":"IMPORTED","item":"PEACH LIQUEUR","rate":800.00 },
{"id":"X71","group":"LIQUOR","subgroup":"SPIRITS","category":"LIQUERS","subcategory":"IMPORTED","item":"BLUE CURACAO","rate":800.00 },
{"id":"X72","group":"LIQUOR","subgroup":"SPIRITS","category":"LIQUERS","subcategory":"IMPORTED","item":"TRIPLE SEC","rate":800.00 },
{"id":"X73","group":"LIQUOR","subgroup":"WINES","category":"RED WINE","subcategory":"IMPORTED","item":"IMPORTED RED","rate": 1500.00 },
{"id":"X74","group":"LIQUOR","subgroup":"WINES","category":"RED WINE","subcategory":"INDIAN","item":"DOMESTIC RED","rate": 1000.00 },
{"id":"X75","group":"LIQUOR","subgroup":"WINES","category":"WHITE WINE","subcategory":"IMPORTED","item":"IMPORTED WHITE","rate": 1500.00 },
{"id":"X76","group":"LIQUOR","subgroup":"WINES","category":"WHITE WINE","subcategory":"INDIAN","item":"DOMESTIC WHITE","rate": 1000.00 },
{"id":"X77","group":"LIQUOR","subgroup":"BEER","category":"BEER","subcategory":"IMPORTED","item":"CORONA 355ML","rate":900.00 },
{"id":"X78","group":"LIQUOR","subgroup":"BEER","category":"BEER","subcategory":"IMPORTED","item":"STELLA ARTOIS 330ML","rate":900.00 },
{"id":"X79","group":"LIQUOR","subgroup":"BEER","category":"BEER","subcategory":"IMPORTED","item":"HOEGGARDEN 330ML","rate":800.00 },
{"id":"X80","group":"LIQUOR","subgroup":"BEER","category":"BEER","subcategory":"INDIAN","item":"DOMESTIC BEER 330ML","rate":700.00 },
{"id":"X81","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"SIGNATURE COCKTAIL","item":"ADAM","rate": 1500.00 },
{"id":"X82","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"SIGNATURE COCKTAIL","item":"BAY BREEZE","rate": 1500.00 },
{"id":"X83","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"SIGNATURE COCKTAIL","item":"SUMMER IN SOUTH","rate": 1500.00 },
{"id":"X84","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"SIGNATURE COCKTAIL","item":"OLYMPIC FLAME","rate": 1500.00 },
{"id":"X85","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"SIGNATURE COCKTAIL","item":"JAGER & WHISKY SOUR","rate": 1500.00 },
{"id":"X86","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"CLASSIC COCKTAIL","item":"SEX ON THE BEACH","rate": 1000.00 },
{"id":"X87","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"CLASSIC COCKTAIL","item":"ILLUSION","rate": 1000.00 },
{"id":"X88","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"CLASSIC COCKTAIL","item":"LONG ISLAND ICED TEA","rate": 1000.00 },
{"id":"X89","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"CLASSIC COCKTAIL","item":"WHISKEY SOUR","rate": 1000.00 },
{"id":"X90","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"CLASSIC COCKTAIL","item":"BLOODY MARRY","rate": 1000.00 },
{"id":"X91","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"CLASSIC COCKTAIL","item":"PINACOLADA","rate": 1000.00 },
{"id":"X92","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"CLASSIC COCKTAIL","item":"DAIQUIRI","rate": 1000.00 },
{"id":"X93","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"CLASSIC COCKTAIL","item":"MARGARITA","rate": 1000.00 },
{"id":"X94","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"CLASSIC COCKTAIL","item":"COSMOPOLITON","rate": 1000.00 },
{"id":"X95","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"CHAMPAGNE COCKTAIL","item":"MIMOSA","rate": 1500.00 },
{"id":"X96","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"CHAMPAGNE COCKTAIL","item":"BELLINI","rate": 1500.00 },
{"id":"X97","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"CHAMPAGNE COCKTAIL","item":"SANGARIA (REDITE & ROSE)","rate":  1500.00 },
{"id":"X98","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"SHOTS","item":"FLAMING LAMBORGHINI","rate": 2500.00 },
{"id":"X99","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"SHOTS","item":"JAGER BOMB","rate": 1500.00 },
{"id":"X100","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"SHOTS","item":"MSG","rate": 1000.00 },
{"id":"X101","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"SHOTS","item":"SLIPPERY NIPPLE","rate": 1200.00 },
{"id":"X102","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"SHOTS","item":"ANGRY ANGEL","rate": 1000.00 },
{"id":"X103","group":"LIQUOR","subgroup":"COCKTAILS","category":"COCKTAILS","subcategory":"SHOTS","item":"KAMIKAZE","rate": 1000.00 },
{"id":"X104","group":"BEVERAGE","subgroup":"SOFT BEVERAGE","category":"MOCKTAIL","subcategory":"MOCKTAIL","item":"CHATKA MARY ","rate":700.00 },
{"id":"X105","group":"BEVERAGE","subgroup":"SOFT BEVERAGE","category":"MOCKTAIL","subcategory":"MOCKTAIL","item":"STRAWBERRY MANGO TWIST","rate":700.00 },
{"id":"X106","group":"BEVERAGE","subgroup":"SOFT BEVERAGE","category":"MOCKTAIL","subcategory":"MOCKTAIL","item":"FRENCH 75","rate":700.00 },
{"id":"X107","group":"BEVERAGE","subgroup":"SOFT BEVERAGE","category":"MOCKTAIL","subcategory":"MOCKTAIL","item":"APPLE CINNAMON TANGO","rate":700.00 },
{"id":"X108","group":"BEVERAGE","subgroup":"SOFT BEVERAGE","category":"MOCKTAIL","subcategory":"MOCKTAIL","item":"JUST SHUT UP AND KISS ME","rate":700.00 },
{"id":"X109","group":"BEVERAGE","subgroup":"SOFT BEVERAGE","category":"MOCKTAIL","subcategory":"MOCKTAIL","item":"VIRGIN MOJITO","rate":700.00 },
{"id":"X110","group":"BEVERAGE","subgroup":"SOFT BEVERAGE","category":"ARETED WATER","subcategory":"AERATED BEVERAGES","item":"RED BULL","rate":500.00 },
{"id":"X111","group":"BEVERAGE","subgroup":"SOFT BEVERAGE","category":"ARETED WATER","subcategory":"AERATED BEVERAGES","item":"SPARKLING WATER","rate":400.00 },
{"id":"X112","group":"BEVERAGE","subgroup":"SOFT BEVERAGE","category":"ARETED WATER","subcategory":"AERATED BEVERAGES","item":"TONIC WATER","rate":400.00 },
{"id":"X113","group":"BEVERAGE","subgroup":"SOFT BEVERAGE","category":"ARETED WATER","subcategory":"AERATED BEVERAGES","item":"GINGER ALE","rate":400.00 },
{"id":"X114","group":"BEVERAGE","subgroup":"SOFT BEVERAGE","category":"ARETED WATER","subcategory":"AERATED BEVERAGES","item":"AERATED DRINKS (DIET COKE/COKE/COKE ZERO/SPRITE/FANTA)","rate":300.00 },
{"id":"X115","group":"BEVERAGE","subgroup":"SOFT BEVERAGE","category":"ARETED WATER","subcategory":"AERATED BEVERAGES","item":"PACKAGED DRINKING WATER","rate":200.00 },
{"id":"X116","group":"BEVERAGE","subgroup":"SOFT BEVERAGE","category":"JUICE","subcategory":"CANE JUICE","item":"JUICE ORANGE (GL)","rate":300.00 },
{"id":"X117","group":"BEVERAGE","subgroup":"SOFT BEVERAGE","category":"JUICE","subcategory":"CANE JUICE","item":"JUICE WATERMELAN (GL)","rate":300.00 },
{"id":"X118","group":"BEVERAGE","subgroup":"SOFT BEVERAGE","category":"JUICE","subcategory":"CANE JUICE","item":"JUICE PINEAPPLE (GL)","rate":300.00 },
{"id":"X119","group":"BEVERAGE","subgroup":"SOFT BEVERAGE","category":"JUICE","subcategory":"CANE JUICE","item":"JUICE SWEET LIME (GL)","rate":300.00 },
{"id":"X120","group":"BEVERAGE","subgroup":"SOFT BEVERAGE","category":"JUICE","subcategory":"CANE JUICE","item":"JUICE MIX (GL)","rate":300.00 },
{"id":"X121","group":"BEVERAGE","subgroup":"HOT BEVERAGE","category":"","subcategory":"","item":"COFFEE","rate":300.00 },
{"id":"X122","group":"BEVERAGE","subgroup":"HOT BEVERAGE","category":"","subcategory":"","item":"TEA","rate":300.00 },
{"id":"X123","group":"TOBACCO","subgroup":"TOBACCO","category":"TOBACCO","subcategory":"TOBACCO","item":"HYDRA","rate": 1111.00},
{"id":"X124","group":"TOBACCO","subgroup":"TOBACCO","category":"TOBACCO","subcategory":"TOBACCO","item":"CIGRETTES","rate":700.00 }
    ]
    }
  }

  handleDeleteOptions(){
    this.setState(()=>({options:[]}));
  }

  pickOptions(){
    const randNumber = Math.floor(Math.random() * this.state.options.length);
    const selectedOptions = this.state.options[randNumber];
    alert(selectedOptions)
  }

  handleOption(option){   
    if(!option){
      return 'Enter valid value';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }  
    this.setState((prevState)=>({options : prevState.options.concat([option])}));
  }

  render () {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of Computer";
    const optionsArr = ["Things One","Things Two","Things Three"];
    return (
      <div>
        {/*<Header title={title} subtitle={subtitle}/>
        <Action 
          hasOptions = {this.state.options.length > 0}
          pickOptions = {this.pickOptions}
        />
        <Options 
          optionspasses={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleOption = {this.handleOption}
    />          */}
        
        <div className="row center-align">
          <h5>POS View</h5>
        </div>
        <div className="row">
          <POSView foodMenu={this.state.staticmenu} />
        </div>
      </div>
    );
  }
}
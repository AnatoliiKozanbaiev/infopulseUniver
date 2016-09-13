var settings = {};

settings.data = null;
settings.init = function (oSettings){
	settings.data = oSettings;
	}
settings.get  = function (sSettingName){
	return settings.data[sSettingName]
	}
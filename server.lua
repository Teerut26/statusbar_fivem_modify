ESX = nil
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
ESX.RegisterServerCallback('statusbar:server:getping', function(source, cb)
    data =  {
        my_ping = GetPlayerPing(source)
    }
    cb(data)
end)
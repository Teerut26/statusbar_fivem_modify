local status = nil
ESX = nil
mysql_data = nil
ping = 99

Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
        Citizen.Wait(0)
    end
    Wait(7)
    ESX.TriggerServerCallback('xscoreboard:server:getdata', function(data)
        mysql_data = data
    end)
end)

Citizen.CreateThread(function()
    while true do

        Citizen.Wait(300)

        SetPedMaxTimeUnderwater(GetPlayerPed(-1), 10.00) -- Set the underwater time to all players
        local playerId = PlayerId()
        local ped = GetPlayerPed(-1)
        local health = GetEntityHealth(ped)
        local armor = GetPedArmour(ped)
        local playerStamina = 100 - GetPlayerSprintStaminaRemaining(playerId)
        local playerDive = GetPlayerUnderwaterTimeRemaining(playerId) * 10.0
        
        SendNUIMessage({
            show = IsPauseMenuActive(),
            health = (GetEntityHealth(GetPlayerPed(-1))-100),
            stamina = playerStamina,
            dive = playerDive,
            heal = health,
            armor = armor,
            food = food,
            water = water,
            id = GetPlayerServerId(PlayerId()),
            mysql_data = mysql_data,
            ping = ping
        })
    end
end)

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(2000)
        ESX.TriggerServerCallback('statusbar:server:getping', function(data)
            -- print(data.my_ping)
            ping = data.my_ping
        end)
    end
end)



RegisterNetEvent("Xtra_StatusHud:updateStatus")
AddEventHandler("Xtra_StatusHud:updateStatus", function(status)
    food, water = status[1].percent, status[2].percent
end)
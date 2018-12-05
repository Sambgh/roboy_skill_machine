# roboy_skill_machine
"Show me what you got" - A Cromulon, a pretty large head wanting to see what you got

As of now, run client like:
rosrun roboy_controller skill_machine_client.py roboy_controller head_look_at_sound_source.py roboy_audio_location True

And server like:
rosrun roboy_controller skill_machine.py

Roslaunch has difficulties running with service calls, so the code needs to be cleaned up to either remove Roslaunch and superfluous arguments, or to get it to work with Roslaunch

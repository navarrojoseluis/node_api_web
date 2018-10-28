Vagrant.configure("2") do |config|  
  config.vm.define "nodejs" do |nodejs|
    nodejs.vm.box = "bento/ubuntu-18.04"
    nodejs.vm.hostname = "nodejs"
    # Create a private network, which allows host-only access to the machine
    # using a specific IP.
    nodejs.vm.network "private_network", ip: "10.10.0.2"

    # Share an additional folder to the guest VM. The first argument is
    # the path on the host to the actual folder. The second argument is
    # the path on the guest to mount the folder. And the optional third
    # argument is a set of non-required options.
    nodejs.vm.synced_folder "../node_api_web", "/home/vagrant"

    nodejs.vm.provider "virtualbox" do |vb|
      vb.name = "nodejs"
      vb.memory = "1024"
      vb.cpus = 1
    end
  end
end